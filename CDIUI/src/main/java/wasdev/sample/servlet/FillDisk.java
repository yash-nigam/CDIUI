package wasdev.sample.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.softlayer.api.RestApiClient;
import com.softlayer.api.service.Account;
import com.softlayer.api.service.virtual.Guest;

import java.io.PrintWriter;

@WebServlet("/FillDisk")
public class FillDisk extends HttpServlet {
	protected void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		
		String userName = "SL973639";
        String apiKey = "48393361daa8241d5db1624f6bf7382658c04a9d954e5db123dc8d328d804148";
        
        try {
	        String baseUrl = RestApiClient.BASE_URL;
	        if (!baseUrl.endsWith("/")) {baseUrl += '/'; }
            
	        RestApiClient client = new RestApiClient(baseUrl).withCredentials(userName, apiKey);
	        Account.Service service = Account.service(client);
	        service.withMask().virtualGuests();
	        Account account = service.getObject();
	        Guest vm1 = null;
	        for(Guest guest : account.getVirtualGuests()) {
		    	   System.out.println(guest.getFullyQualifiedDomainName());
   		    	   }
        	} catch (Exception e) { e.printStackTrace(); }
}
}
