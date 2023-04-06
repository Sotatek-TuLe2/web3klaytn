package opensdk.sdk.apis.klay.others;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayCallObject;
import opensdk.sdk.models.KlayCreateAccessListResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayCreateAccessListExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayCreateAccessListExample() throws IOException {
        KlayCallObject object = new KlayCallObject();
        object.setFrom("0x3bc5885c2941c5cda454bdb4a8c88aa7f248e312");
        object.setTo("0x00f5f5f3a25f142fafd0af24a754fafa340f32c7");
        object.setGas("0x3d0900");
        object.setGasPrice("0x3b9aca00");
        object.setInput("0x20965255");
        KlayCreateAccessListResponse response = sdk.klay.createAccessList(object , "latest").send();
        response.getResult();
    }
}
