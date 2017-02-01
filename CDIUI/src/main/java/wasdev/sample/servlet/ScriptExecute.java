package wasdev.sample.servlet;

import com.softlayer.api.RestApiClient;
import com.softlayer.api.service.Account;
import com.softlayer.api.service.virtual.Guest;
import com.softlayer.api.service.virtual.Guest.Service;

public class ScriptExecute {
	public static void main(String[]args){
	String userName = "gautambhat";
    String apiKey = "729248b0d733fae60623832bbae0e60f8b0c0c27ce6f52a5d6c219e479936b21";
    String remoteScript="https://gist.githubusercontent.com/yash-nigam/86b61fb14507542103b0881cb568fdd1/raw/5ffa27c070042096a8fd0c303118ecd86e20839d/create-event-test.sh";
	
    try {
        String baseUrl = RestApiClient.BASE_URL;
        if (!baseUrl.endsWith("/")) {
            baseUrl += '/';
        	}

        RestApiClient client = new RestApiClient(baseUrl).withCredentials(userName, apiKey);
        System.out.println("Client Creds = "+ client.getCredentials());
        
        Account.Service service = Account.service(client);
        System.out.println("Contacts = "+service.getAccountContacts().toString());
        
        service.withMask().virtualGuests();
        Account account = service.getObject();
        System.out.println(account.getVirtualGuestCount());
        
        Guest vm1 = null;            
	    for(Guest guest : account.getVirtualGuests()) {
	    	if(guest.getId().equals(Long.parseLong("27245595"))){ System.out.println("matched");vm1=guest;}
	    	//System.out.println(guest.getFullyQualifiedDomainName() + guest.getId());
	    }
	    
	System.out.println("Executing Remote Script on "+ vm1.getFullyQualifiedDomainName());
	
	Guest.Service gservice = Guest.service(client);
    gservice = vm1.asService(client);
	gservice.executeRemoteScript(remoteScript);
	
	System.out.println("Execution Complete");   
		}
	  
	
	catch (Exception e) {e.printStackTrace();
	System.out.println("e.message = " + e.getMessage());
	}
}
}