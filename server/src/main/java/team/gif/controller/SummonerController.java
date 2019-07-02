package team.gif.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team.gif.service.SummonerService;

import java.io.IOException;
import java.net.URISyntaxException;

@RestController
@RequestMapping(value = "/api/summoner", produces = MediaType.APPLICATION_JSON_VALUE)
public class SummonerController {
	
	@Autowired
	private SummonerService summonerService;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/by-name/{name}")
	ResponseEntity<String> getSummonerByName(@PathVariable String name) throws URISyntaxException {
		return summonerService.getSummonerByName(name);
	}
	
}
