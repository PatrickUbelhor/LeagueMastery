package team.gif.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import team.gif.Config;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Service
public class SummonerService {
	
	@Autowired
	private Config config;
	
	public String getSummonerByName(String name) throws IOException, InterruptedException {
		HttpClient client = HttpClient.newBuilder()
				.version(HttpClient.Version.HTTP_2)
				.build();
		
		HttpRequest request = HttpRequest.newBuilder()
				.uri(URI.create("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + name))
				.header("Content-Type", "application/json")
				.header("X-Riot-Token", config.getToken())
				.GET()
				.build();
		
		HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
		
		return response.body();
	}
	
}
