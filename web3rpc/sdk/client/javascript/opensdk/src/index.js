const { ApiClient, AdminApi, DebugApi, GovernanceApi, KlayApi, NetApi, PersonalApi, TxpoolApi }  = require("@klaytn/web3rpc");

class OpenSDK {
    static Klay = KlayApi
    static Txpool = TxpoolApi
    static Net = NetApi
    static Personal = PersonalApi
    static Admin = AdminApi
    static ApiClient = ApiClient
    static Debug = DebugApi
    static Governance = GovernanceApi

    constructor(apiClient) {
        this.klay = new KlayApi(apiClient)
        this.txpool = new TxpoolApi(apiClient)
        this.net = new NetApi(apiClient)
        this.personal = new PersonalApi(apiClient)
        this.admin = new AdminApi(apiClient)
        this.debug = new DebugApi(apiClient)
        this.governance= new GovernanceApi(apiClient)
    }
    static klay(apiClient) {
        return new OpenSDK.Klay(apiClient)
    }
    static txpool(apiClient) {
        return new OpenSDK.Txpool(apiClient)
    }
    static net(apiClient) {
        return new OpenSDK.Net(apiClient)
    }
    static personal(apiClient) {
        return new OpenSDK.Personal(apiClient)
    }
    static admin(apiClient) {
        return new OpenSDK.Admin(apiClient)
    }
    static debug(apiClient) {
        return new OpenSDK.Debug(apiClient)
    }
    static governance(apiClient) {
        return new OpenSDK.Governance(apiClient)
    }

}
module.exports = OpenSDK