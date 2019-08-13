package team.gif.exception;

public class SummonerNotFoundException extends RuntimeException {
	
	public SummonerNotFoundException(String name) {
		super(String.format("Summoner \"%s\" not found!", name));
	}
	
}
