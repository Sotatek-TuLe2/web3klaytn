import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

fileName = "/tmp/chain.txt"

sdk = OpenSDK(host)
admin_response = sdk.admin.import_chain(fileName)

print(json.loads(admin_response.response.data))
