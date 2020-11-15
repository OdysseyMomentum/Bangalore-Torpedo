

import os
from ocean_lib.config import Config
from ocean_lib.config_provider import ConfigProvider
from ocean_lib.ocean.util import get_web3_connection_provider
from ocean_lib.web3_internal.web3_provider import Web3Provider
from ocean_lib.web3_internal.contract_handler import ContractHandler
import json
config = Config(os.getenv('CONFIG_FILE'))
ConfigProvider.set_config(config)
Web3Provider.init_web3(provider=get_web3_connection_provider(config.network_url))
ContractHandler.set_artifacts_path(config.artifacts_path)


from ocean_lib.ocean.ocean import Ocean
from ocean_lib.config import Config

import os
from ocean_lib.web3_internal.web3_provider import Web3Provider
from ocean_lib.web3_internal.wallet import Wallet

web3 = Web3Provider.get_web3()
wallet = Wallet(web3, private_key='0xaefd8bc8725c4b3d15fbe058d0f58f4d852e8caea2bf68e0f73acb1aeec19baa')
# wallet = Wallet(web3, private_key=os.getenv('MY_TEST_KEY'))
# print(os.getenv('MY_TEST_ENCRYPTED_KEY'))
# # wallet = Wallet(web3, encrypted_key=json.loads(os.getenv('MY_TEST_ENCRYPTED_KEY')), password=os.getenv('MY_TEST_PASSWORD'))


config = Config(os.getenv('CONFIG_FILE'))
ocean = Ocean(config)
wallet = Wallet(ocean.web3, private_key=os.getenv('MY_TEST_KEY'))
print(ocean.assets.download("c58781Ccabf4aa7792d4540Fcf5bAe31a0FaBC66", '', wallet,' order trx id',''))



# export MY_TEST_KEY=0xaefd8bc8725c4b3d15fbe058d0f58f4d852e8caea2bf68e0f73acb1aeec19baa
# export MY_TEST_ENCRYPTED_KEY='{"address": "281269c18376010b196a928c335e495bd05ec32f", "crypto": {"cipher": "aes-128-ctr", "cipherparams": {"iv": "ac0b74c5100bd319030d983029256250"}, "ciphertext": "6e003d25869a8f84c3d055d4bda3fd0e83b89769b6513b58b2b76d0738f2ab1c", "kdf": "pbkdf2", "kdfparams": {"c": 1000000, "dklen": 32, "prf": "hmac-sha256", "salt": "423c1be88c1fadd926c1b668a5d93f74"}, "mac": "6b90720ddc10d457c2e3e7e1b61550d7a7fa75e6051cb1ed4f1516fba4f0a45f"}, "id": "7954ec59-6819-4e3c-b065-e6f3a9c1fe6c", "version": 3}'
# export MY_TEST_PASSWORD=OceanProtocol
# export CONFIG_FILE=my_config.ini
# export NETWORK_URL=rinkeby
# export AQUARIUS_URL=https://aquarius.rinkeby.v3.dev-ocean.com
# export PROVIDER_URL=https://provider.rinkeby.v3.dev-ocean.com
