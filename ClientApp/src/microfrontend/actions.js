export const ReceiveSettings = "RECEIVE_SETTINGS";


export function readAppSettings() {    
    
    var settings= JSON.parse(process.env.MicroFrontendApps);
    if (settings != undefined && settings != null && settings != "") {
        return { type: ReceiveSettings, appSettings: settings };
    }else{
        return { type: ReceiveSettings, appSettings: null };
    }
}