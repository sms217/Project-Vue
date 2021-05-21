package com.anjava;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.GridLayout;
import java.awt.ScrollPane;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.*;
import javax.swing.border.LineBorder;

public class LoggedInPanel extends JPanel{
	int n = 50;
	JButton[] reserveBtn = new JButton[n];
	JPanel labelPanel;
//	JScrollPane scroll = new JScrollPane(this,10, 10);
	
	LoggedInPanel2 lip = new LoggedInPanel2(); 
	
	
	public LoggedInPanel(){
		//PanelSetting
		this.setBorder(BorderFactory.createLineBorder(Color.black));
		this.setBounds(6,54,600,400);
		for(int i = 0; i < n; i++) {
			reserveBtn[i] = new JButton("<HTML>" + "roomNum" + "<br>예약 현황20/40<br>좌석초기화:2021/03/09<br>앞으로 27일 5시간 39분<HTML>");
			reserveBtn[i].setBackground(Color.gray.brighter());
			reserveBtn[i].setBorder(null);
			reserveBtn[i].setPreferredSize(new Dimension(140,90));
			add(reserveBtn[i]);
		}
	}
  

	
}
