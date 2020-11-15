import yaml
from flask import Blueprint

import sys
sys.path.append("..")

from tasks.tasks import Task
from data.data import Data
from models.model import Model
import uuid

config_path = "config/config.yaml"

with open(config_path, "r") as fp:
    config = yaml.load(fp, Loader=yaml.FullLoader)

new_task_api = Blueprint('new_task_api', __name__)

@new_task_api.route("/new_task", methods=['POST'])
def new_task():
    # Extract the Json string and convert it into an object
    # generate unique id, and add to the task object with key "_id"

    # replace the task element of config with task object
    # get_json()['_id']
    task_object = request.get_json()
    console.log(task_object)
    task_object['_id'] = uuid.uuid1()
    config["task"] = task_object

    task = Task(config)
    data = Data.load_direct(config["data"]["save_location"], config["task"]["data_id"])
    model = Model(config, task, data)
    best_res = model.train(save_model=True)

    return str(best_res)