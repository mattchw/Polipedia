package com.mattchw.bewater.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "youtube_category")
public class YoutubeCategory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(columnDefinition = "serial")
	@JsonIgnore
	private long id;
	
	@Column(name = "youtube")
	@JsonIgnore
	private int youtubeId;
	
	@Column(name = "value")
	private int value;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getYoutubeId() {
		return youtubeId;
	}

	public void setYoutubeId(int youtubeId) {
		this.youtubeId = youtubeId;
	}

	public int getValue() {
		return value;
	}

	public void setValue(int value) {
		this.value = value;
	}
}
