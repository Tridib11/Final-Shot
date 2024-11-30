//
// Created by tridi on 30-11-2024.
//
#include<iostream>
#include <sstream>
using namespace std;
int main(){
  string s1,s2;
  getline(cin,s1);
  getline(cin,s2);
  stringstream ss1(s1),ss2(s2);

  string f1,l1,f2,l2;
  ss1>>f1>>l1;
  ss2>>f2>>l2;

  if (l1==l2) {
    cout<<"ARE Brothers"<<endl;
  }else {
    cout<<"NOT"<<endl;
  }


}


