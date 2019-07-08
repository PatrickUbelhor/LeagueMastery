package team.gif.model;

import lombok.Data;

@Data
public class Champion {
	private String version;
	private String id; // Some name
	private String key; // Unique number
	private String name; // Name as seen in-game
	private String title;
	private String blurb;
	private Info info;
	private Image image;
	private String[] tags;
	private String partype;
	private Stats stats;
	
	@Data
	private class Info {
		private int attack;
		private int defense;
		private int magic;
		private int difficulty;
	}
	
	@Data
	private class Image {
		private String full;
		private String sprite;
		private String group;
		private int x;
		private int y;
		private int w;
		private int h;
	}
	
	@Data
	private class Stats {
		private int hp;
		private int hpperlevel;
		private int mp;
		private int mpperlevel;
		private int movespeed;
		private int armor;
		private int armorperlevel;
		private int spellblock;
		private int spellblockperlevel;
		private int attackrange;
		private int hpregen;
		private int hpregenperlevel;
		private int mpregen;
		private int mpregenperlevel;
		private int crit;
		private int critperlevel;
		private int attackdamage;
		private int attackdamageperlevel;
		private int attackspeedperlevel;
		private int attackspeed;
	}
	
}
