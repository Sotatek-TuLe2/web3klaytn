#-*- coding:utf-8 -*-
from eth_account import Account
from web3 import Web3
from eth_account.messages import encode_defunct
from eth_utils.curried import to_hex
from web3py_ext import extend

w3 = Web3(Web3.HTTPProvider('https://public-en-baobab.klaytn.net'))

def web3_legacy_value_transfer_sign_recover():
    user = Account.from_key_pair(
        # multisig account address
        '0x82c6a8d94993d49cfd0c1d30f0f8caa65782cc7e',
        # a member key of multisig account
        '0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac'
    )
    message = to_hex(text="I♥KLAYTN")
    msghash = encode_defunct(hexstr=message)
    signature = Account.sign_message(msghash, user.key)

    print(signature.signature.hex())
    print(len(signature.signature.hex()))
    recovered = w3.klay.recover_from_message(user.address, message, signature.signature.hex(), "latest")
    print("\nsender", user.address, "\nrecovered", recovered) # recovered is an original address of the member key

web3_legacy_value_transfer_sign_recover()