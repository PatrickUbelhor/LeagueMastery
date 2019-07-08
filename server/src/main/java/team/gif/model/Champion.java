package team.gif.model;

import lombok.Data;

@Data
public class Champion {
	private final String version;
	private final String id; // Some name
	private final String key; // Unique number
	private final String name; // Name as seen in-game
	private final String title;
	private final String blurb;
	private final Info info;
	private final Image image;
	private final String[] tags;
	private final String partype;
	private final Stats stats;
	
	@Data
	private class Info {
		private final int attack;
		private final int defense;
		private final int magic;
		private final int difficulty;
	}
	
	@Data
	private class Image {
		private final String full;
		private final String sprite;
		private final String group;
		private final int x;
		private final int y;
		private final int w;
		private final int h;
	}
	
	@Data
	private class Stats {
		private final int hp;
		private final int hpperlevel;
		private final int mp;
		private final int mpperlevel;
		private final int movespeed;
		private final int armor;
		private final int armorperlevel;
		private final int spellblock;
		private final int spellblockperlevel;
		private final int attackrange;
		private final int hpregen;
		private final int hpregenperlevel;
		private final int mpregen;
		private final int mpregenperlevel;
		private final int crit;
		private final int critperlevel;
		private final int attackdamage;
		private final int attackdamageperlevel;
		private final int attackspeedperlevel;
		private final int attackspeed;
	}
	
}
