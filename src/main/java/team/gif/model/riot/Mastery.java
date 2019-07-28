package team.gif.model.riot;

import lombok.Data;

@Data
public class Mastery {
	
	private Integer championLevel;
	private String chestGranted;
	private Long championPoints;
	private Long championPointsSinceLastLevel;
	private Long championPointsUntilNextLevel;
	private String summonerId;
	private Integer tokensEarned;
	private Integer championId;
	private Long lastPlayTime;

}
