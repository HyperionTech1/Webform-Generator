package com.HyperionTechApi.springboot.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//to retrieve from db we use entity
@Entity
@Table(name = "form_3")
public class User {


	@Id
	@GeneratedValue(strategy = GenerationType.AUTO) // or GenerationType.IDENTITY
	private long id;
	@Column(name = "last_name")
	private String last_name;
	@Column(name = "first_name")
	private String first_name;
	@Column(name = "email")
	private String email;
	/*
	@Column(name = "WebformID")
	private int webformID;
	//new for actual webform generator
	@Column(name = "ButtonID")
	private int buttonID;

	@Column(name = "button_description")
	private String buttonDescription;

	@Column(name = "button_answer")
	private int buttonAnswer;
	@Column(name = "textboxID")
	private int textboxID;
	@Column(name = "textbox_description")
	private String textboxDescription;
	@Column(name = "textbox_answer")
	private String textboxAnswer;
	@Column(name = "checkboxID")
	private int checkboxID;
	@Column(name = "checkbox_description")
	private String checkboxDescription;
	@Column(name = "checkbox_answer")
	private int checkboxAnswer;
	 */
	// end new
	public User(String last_name, String first_name, String email)
	{
		super();
		this.last_name = last_name;
		this.first_name = first_name;
		this.email = email;
	}
		public User() {
			super();
		}
		public long getId() { return id; }
		public void setId(long id) {this.id = id;}

		public String getLastName() {
			return last_name;
		}
		public void setLastName(String last_name) {
			this.last_name = last_name;
		}

		public String getFirstName() {
			return first_name;
		}
		public void setFirstName(String first_name) {
			this.first_name = first_name;
		}

		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}

	//new
	/*
	public User(int webformID, int buttonID, String buttonDescription, int buttonAnswer, int textboxID, String textboxDescription, String textboxAnswer, int checkboxID, String checkboxDescription, int checkboxAnswer)
	{
		super();
		this.webformID = webformID;
		this.buttonID = buttonID;
		this.buttonDescription = buttonDescription;
		this.buttonAnswer = buttonAnswer;
		this.textboxID = textboxID;
		this.textboxDescription = textboxDescription;
		this.textboxAnswer = textboxAnswer;
		this.checkboxID = checkboxID;
		this.checkboxDescription = checkboxDescription;
		this.checkboxAnswer = checkboxAnswer;

	}
	public User() {
		super();
	}

	public long getId() { return id; }
	public void setId(long id) { this.id = id; }

	public int getWebformID() {
		return webformID;
	}
	public void setWebformID(int webformID) {
		this.webformID = webformID;
	}

	public int getButtonID() {
		return buttonID;
	}
	public void setButtonID(int buttonID) {
		this.buttonID = buttonID;
	}

	public String getButtonDescription() {
		return buttonDescription;
	}
	public void setButtonDescription(String buttonDescription) {
		this.buttonDescription = buttonDescription;
	}
	public int getButtonAnswer() {
		return buttonAnswer;
	}
	public void setButtonAnswer(int buttonAnswer) {
		this.buttonAnswer = buttonAnswer;
	}
	public int getTextboxID() {
		return textboxID;
	}
	public void setTextboxID(int textboxID) {
		this.textboxID = textboxID;
	}
	public String getTextboxDescription() {
		return textboxDescription;
	}
	public void setTextboxDescription(String textboxDescription) {
		this.textboxDescription = textboxDescription;
	}
	public String getTextboxAnswer() {
		return textboxAnswer;
	}
	public void setTextboxAnswer(String textboxAnswer) {
		this.textboxAnswer = textboxAnswer;
	}
	public int getCheckboxID() {
		return checkboxID;
	}
	public void setCheckboxID(int checkboxID) {
		this.checkboxID = checkboxID;
	}
	public String getCheckboxDescription() {
		return checkboxDescription;
	}
	public void setCheckboxDescription(String checkboxDescription) {
		this.checkboxDescription = checkboxDescription;
	}
	public int getCheckboxAnswer() {
		return checkboxAnswer;
	}
	public void setCheckboxAnswer(int checkboxAnswer) {
		this.checkboxAnswer = checkboxAnswer;
	}

	 */
	
}
