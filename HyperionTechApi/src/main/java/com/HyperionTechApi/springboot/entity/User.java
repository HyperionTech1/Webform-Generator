package com.HyperionTechApi.springboot.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//to retrieve from db we use entity
@Entity
@Table(name = "WebformSimpleDB")
public class User {


	@Id
	@GeneratedValue(strategy = GenerationType.AUTO) // or GenerationType.IDENTITY
	private long id;
	/*
	@Column(name = "last_name")
	private String last_name;
	@Column(name = "first_name")
	private String first_name;
	@Column(name = "email")
	private String email;

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

	 */
	//new
	@Column(name="textDescription1")
	private String textDescription1;
	@Column(name="textAnswer1")
	private String textAnswer1;
	@Column(name="textDescription2")
	private String textDescription2;
	@Column(name="textAnswer2")
	private String textAnswer2;
	@Column(name="buttonDescription1")
	private String buttonDescription1;
	@Column(name="buttonAnswer1")
	private String buttonAnswer1;
	@Column(name="buttonDescription2")
	private String buttonDescription2;
	@Column(name="buttonAnswer2")
	private String buttonAnswer2;
	@Column(name="fileUploadDescription1")
	private String fileUploadDescription1;
	@Column(name="fileUploadAnswer1")
	private String fileUploadAnswer1;
	@Column(name="fileUploadDescription2")
	private String fileUploadDescription2;
	@Column(name="fileUploadAnswer2")
	private String fileUploadAnswer2;
	@Column(name="longTextDescription1")
	private String longTextDescription1;
	@Column(name="longTextAnswer1")
	private String longTextAnswer1;
	@Column(name="longTextDescription2")
	private String longTextDescription2;
	@Column(name="longTextAnswer2")
	private String longTextAnswer2;


	public User(String textDescription1, String textAnswer1, String textDescription2, String textAnswer2, String buttonDescription1, String buttonAnswer1,
				String buttonDescription2, String buttonAnswer2, String fileUploadDescription1, String fileUploadAnswer1, String fileUploadDescription2, String fileUploadAnswer2,
				String longTextDescription1, String longTextAnswer1, String longTextDescription2, String longTextAnswer2)
	{
		super();
		/*
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
		*/
		this.textDescription1 = textDescription1;
		this.textAnswer1 = textAnswer1;
		this.textDescription2 = textDescription2;
		this.textAnswer2 = textAnswer2;
		this.buttonDescription1 = buttonDescription1;
		this.buttonAnswer1 = buttonAnswer1;
		this.buttonDescription2 = buttonDescription2;
		this.buttonAnswer2 = buttonAnswer2;
		this.fileUploadDescription1 = fileUploadDescription1;
		this.fileUploadAnswer1 = fileUploadAnswer1;
		this.fileUploadDescription2 = fileUploadDescription2;
		this.fileUploadAnswer2 = fileUploadAnswer2;
		this.longTextDescription1 = longTextDescription1;
		this.longTextAnswer1 = longTextAnswer1;
		this.longTextDescription2 = longTextDescription2;
		this.longTextAnswer2 = longTextAnswer2;
	}
	public User() {
		super();
	}

	public long getId() { return id; }
	public void setId(long id) { this.id = id; }

	public String getTextDescription1() {
		return textDescription1;
	}
	public void setTextDescription1(String textDescription1) {
		this.textDescription1 = textDescription1;
	}

	public String getTextAnswer1() {
		return textAnswer1;
	}
	public void setTextAnswer1(String textAnswer1) {
		this.textAnswer1 = textAnswer1;
	}

	public String getTextDescription2() {
		return textDescription2;
	}
	public void setTextDescription2(String textDescription2) {
		this.textDescription2 = textDescription2;
	}

	public String getTextAnswer2() {
		return textAnswer2;
	}
	public void setTextAnswer2(String textAnswer2) {
		this.textAnswer2 = textAnswer2;
	}

	public String getButtonDescription1() {
		return buttonDescription1;
	}
	public void setButtonDescription1(String buttonDescription1) {
		this.buttonDescription1 = buttonDescription1;
	}
	public String getButtonAnswer1() {
		return buttonAnswer1;
	}
	public void setButtonAnswer1(String buttonAnswer1) {
		this.buttonAnswer1 = buttonAnswer1;
	}
	public String getButtonDescription2() {
		return buttonDescription2;
	}
	public void setButtonDescription2(String buttonDescription2) {
		this.buttonDescription2 = buttonDescription2;
	}
	public String getButtonAnswer2(){
		return buttonAnswer2;
	}
	public void setButtonAnswer2(String buttonAnswer2) {
		this.buttonAnswer2 = buttonAnswer2;
	}
	public String getFileUploadDescription1() {
		return fileUploadDescription1;
	}
	public void setFileUploadDescription1(String fileUploadDescription1) {
		this.fileUploadDescription1 = fileUploadDescription1;
	}
	public String getFileUploadAnswer1() {
		return fileUploadAnswer1;
	}
	public void setFileUploadAnswer1(String fileUploadAnswer1) {
		this.fileUploadAnswer1 = fileUploadAnswer1;
	}
	public String getFileUploadDescription2() {
		return fileUploadDescription2;
	}
	public void setFileUploadDescription2(String fileUploadDescription2) {
		this.fileUploadDescription2 = fileUploadDescription2;
	}
	public String getFileUploadAnswer2() {
		return fileUploadAnswer2;
	}
	public void setFileUploadAnswer2(String fileUploadAnswer2) {
		this.fileUploadAnswer2 = fileUploadAnswer2;
	}
	
}
/*
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
