package team.gif.model;

import lombok.Data;
import team.gif.model.riot.Summoner;

@Data
public class ParsedSummoner {
	
	private long profileIconId;
	private String name;
	private long level;
	private String id;
	
	public ParsedSummoner(Summoner rawSummoner) {
		this.profileIconId = rawSummoner.getProfileIconId();
		this.name = rawSummoner.getName();
		this.level = rawSummoner.getSummonerLevel();
		this.id = rawSummoner.getId();
	}
	
}
