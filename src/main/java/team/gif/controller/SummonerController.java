package team.gif.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team.gif.model.ParsedSummoner;
import team.gif.service.SummonerService;

import java.net.URISyntaxException;

@RestController
@RequestMapping(value = "/api/summoner", produces = MediaType.APPLICATION_JSON_VALUE)
public class SummonerController {
	
	private final SummonerService summonerService;
	
	@Autowired
	public SummonerController(SummonerService summonerService) {
		this.summonerService = summonerService;
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/by-name/{name}/{region}")
	ResponseEntity<ParsedSummoner> getSummonerByName(@PathVariable String name, @PathVariable String region) throws URISyntaxException {
		// TODO: Throw special exception if invalid region is specified
		return ResponseEntity.ok(summonerService.getSummonerByName(name, region));
	}
	
}
