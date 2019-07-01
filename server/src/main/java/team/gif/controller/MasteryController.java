package team.gif.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1", produces = MediaType.APPLICATION_JSON_VALUE)
public class MasteryController {
	
	public ResponseEntity<String> hello() {
		return ResponseEntity.ok("Hello world");
	}
	
}
