package team.gif.model.riot;

import lombok.Data;

@Data
public class Champion {
	
	private String version;
	private String id; // Some name
	private String key; // Unique number
	private String name; // Name as seen in-game
	private String title;
	private String blurb;
	private ChampionInfo info;
	private ChampionImage image;
	private String[] tags;
	private String partype;
	private ChampionStats stats;
	
}
