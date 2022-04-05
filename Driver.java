package jdbcdemo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
//import java.sql.*;
import java.sql.SQLException;
import java.sql.Statement;

import java.util.Scanner;

public class Driver {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("Welcome to the Hyperion Technologies Database for Webform Generator");
		String url = "jdbc:mysql://localhost:3306/webform_generator";
		//username and password to connect to database
		String username = "root"; //common username is root
		String password = "Rootpassword96!";
		
		//make connection to INSERT data
		System.out.println("Press 1 for insert and press 2 for retrieval:");
		//read in choice
		Scanner s = new Scanner(System.in);
		
		String choice = s.nextLine();
		
		if(choice.equals("1")) {
			try {
				Connection connection = DriverManager.getConnection(url,username,password);
				System.out.println("Connected to the database!");
				
				//insert a new row using sql command
				String sql = "INSERT INTO name (FirstName, LastName) VALUES (?, ?)"; // (?, ?) for columns first and last names
				
				//create a Statement obj
				statement.setString(1, "test1"); // first column= first name
				statement.setString(2, "case1");
				
				//now execute it
				int rows = statement.executeUpdate(); // returns an integer value in case the # of rows
				if(rows > 0) {
					System.out.println("A row has been inserted.");
				}
				//must close the statement and connection
				statement.close();
				connection.close();

			} catch (SQLException e) {
				// TODO Auto-generated catch block
				System.out.println("Oops, error! Could not connect to database!");
				e.printStackTrace();
			}
		}
		else if(choice.equals("2")) {
			// To RETRIEVE DATA 
			try {
				Connection connection = DriverManager.getConnection(url,username,password);
				System.out.println("Connected to the database!");
				
				//insert a new row using sql command
				String sql = "SELECT * FROM name"; 
				
				//create a Statement obj
				Statement statement = connection.createStatement();
				statement.executeQuery(sql);
				ResultSet result = statement.executeQuery(sql);
				
				int count = 1;
				while(result.next()) {
					//read from each row
					String firstname = result.getString(1);
					String lastname = result.getString("lastName");
					
					System.out.println("Name " + count + " : " + firstname + " " + lastname);
					count++;
				}
				//must close the statement and connection
				statement.close();
				connection.close();

			} catch (SQLException e) {
				// TODO Auto-generated catch block
				System.out.println("Oops, error! Could not connect to database!");
				e.printStackTrace();
			}
		}
		else System.out.println("Exiting.");
		
		
	
	}
 
}
 
