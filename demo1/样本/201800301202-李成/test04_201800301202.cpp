#include<iostream>
#include <stdlib.h> 
using namespace std;

class Node{
	
	public:
	
	char symbol;
	int value;
	Node *next;
	
	Node(char& s){
		
		this->symbol = s;
		this->value = NULL;
		this->next = NULL;
	}
	
	Node(int& s){
		
		this->symbol = NULL;
		this->value = s;
		this->next = NULL;
	}
	
	Node(char& s, Node *n){
		
		this->symbol = s;
		this->value = NULL;
		this->next = n;
		
	}	
	
	Node(int& v , Node *n ){
		
		this->symbol=NULL;
		this->value = v;
		this->next = n;
		
	}
};


int calculate(int num[] ,int n, char sym[],int s){

	int result=num[0];
	
	for(int i = 1 ; i < s ; i++){
					
				
		if(sym[i-1]=='*'){
			
			result=result*num[i];
			
		}
		
		if(sym[i-1]=='/'){
			
			result=result/num[i];
		}
		
		
		if((sym[i]=='+'||sym[i]=='-')&&sym[i-1]=='+')	{
		
			result = result + num[i];
	
		}
		
		if((sym[i]=='+'||sym[i]=='-')&&sym[i-1]=='-')	{
		
			result = result - num[i];
		
		}
		
		if(sym[i]=='*'&&(sym[i-1]=='+'||sym[i-1]=='-')){
			
			num[i+1]=num[i]*num[i+1];
			sym[i]=sym[i-1];
			
		}
		
		if(sym[i]=='/'&&(sym[i-1]=='+'||sym[i-1]=='-')){
			
			num[i+1]=num[i]/num[i+1];
			sym[i]=sym[i-1];
			
		}
		
		if(i+2>=n) {
				
				
			
			if(sym[i]=='*')
			result = result* num[i+1];
			if(sym[i]=='/')
			result = result/ num[i+1];
			if(sym[i]=='+')
			result = result+ num[i+1];
			if(sym[i]=='-')
			result = result- num[i+1];
			
			}
	
	
		}
		if(n<=2){

		if(sym[0]=='*')
		result = result* num[1];
		if(sym[0]=='/')
		result = result/ num[1];
		if(sym[0]=='+')
		result = result+ num[1];
		if(sym[0]=='-')
		result = result- num[1];		
		
				
	}
	

	
	
	return result;
}


class stack{
	
	private:
	
		Node *bottom;
		Node *top;	
		Node *firstNode;
		
		Node *p;
		
		int Size;
		
		
	public:
		
		stack(){
			
			top = NULL;
			bottom = NULL;
			firstNode = NULL;
			
			Size = 0;
			
		}
		
		bool empty(){
			
			if(bottom==NULL)
			
			return true ;
			
			else
			
			return false;
			
		} 
		
		void push(char& s){
			
			Node *n = new Node(s);
			
			if(bottom==NULL){
				
				bottom = n;
				top = bottom;
		
			}
			
			else{
				
				n->next = top;
				
				top = n;
				
				firstNode = top;
				
			}	
			
			Size++;
		}
		
		void push(int v){
			
			Node *n = new Node(v);
			
			if(bottom==NULL){
				
				bottom = n;
				top = bottom;
			}
			
			else{
				
				n->next = top;
				
				top = n;
				
				firstNode = top;
				
			}	
			
			Size++;
		}
		
		void pop(){
			
			if(top!=bottom)
			{	
			
			top = top->next;
			
			delete firstNode;	
			
			firstNode = top;
		
			}
			else {
				
				
				delete top;
				
				top = bottom = firstNode =NULL;
				
			}
			
			
			Size--;
				
		}
		
		Node* read(){
			
			if(top!=NULL){
				
				return top;
			} 
			
			else return NULL;
			
		}
		
		
		int work(){
			
			Node *p = top;
			
			if(top==bottom){
				
				return top->value;
			}
			
			int a = Size/2+1;
			int s = Size/2;
			
			cout<<a<<"~"<<endl;
			
			int c1=0;
			int c2=0;//计数器 
			
			int arr[a];
			char sy[s];
			
			for(int i = 0 ; i < a ; i++){
				
				arr[i]=NULL;
				
			}
			
			for(int i = 0 ; i < s ; i++){
				
				sy[i]=NULL;
				
			}
					
			p = firstNode;
			
			int k = Size;
			
			for(int i = 0 ; i < k;i++){
			
			if(p->symbol==NULL){

				arr[a-1-c1] = p->value;
				
				p = p->next;
				
				c1++;
				
			}
			
			else{
				
				sy[s-1-c2] = p->symbol;
				
				p = p->next;
				
				c2++;
			}
			
		}
		

		return calculate( arr , a , sy , s );		
			
} 		
			
};

bool judge(char a){
	
	
	if(a!='+'&&a!='-'&&a!='*'&&a!='/'&&a!='('&&a!=')')
		return true;
	else return false;
}


int main(){
	
	stack polynomial;
	
	char in[20];
	
	int nn=19 ,ss=19,ii=0;//计数器 
	
	int num[nn];
	
	char symbol[ss];
	
	int number = 0;
	
	for(int j = 0 ; j < 20 ; j ++ ){
		
		in[j]=NULL;//标示符 
		
	}
	
	cout<<"Input"<<endl;
	
	cin>>in;
	
	while(in[number]!=NULL){
		
		number++;
	}
	
	int begin,end,c;
	
	for(int i = 0 ; in[i]!=NULL ; i++){
			
			nn=19;
			ss=19;		
			
			while(in[i]!=NULL&&in[i]!=')'){
			
			if(judge(in[i])){//是数字 
			
			c = in[i]-48;
			
			polynomial.push(c);
		}
			else
			{
			
			polynomial.push(in[i]);
			
			}
			
			i++;
		}		
			
			//a[i]==')'未入 
			
			while(polynomial.empty()==false&&polynomial.read()->symbol!='('){
				
				ii++;
				 
				if(polynomial.read()->symbol==NULL){//数字 
				
					num[nn]=polynomial.read()->value;
					polynomial.pop();			
					nn--;
					
				}
				else{
					
					symbol[ss]=polynomial.read()->symbol;
					polynomial.pop();
					ss--;
				}
				
			}
			if(polynomial.empty()==false) {
	
			polynomial.pop(); 
			
			}
	
			int num_n = (ii+1)/2;
			int sym_n = ii/2;
			
			ii=0; 
			
			int num2[num_n];
			char symbol2[sym_n];
			
			for(int i = 0 ; i < num_n ; i++){
				
				num2[i]=NULL;
				
			}
			
			for(int i = 0 ; i < sym_n ; i++){
				
				symbol2[i]=NULL;
				
			}
			
					
			for(int i = 0 ; i < num_n ; i++){
				
				num2[i]=num[19-num_n+1+i];
			}
			
			for(int i = 0 ; i < sym_n ; i++){
				
				symbol2[i] = symbol[19-sym_n+1+i];
			
			}
			
			polynomial.push(calculate(num2, num_n, symbol2,sym_n));
	
	}
	cout<<"Output"<<endl; 
	cout<<polynomial.work()<<endl;
	cout<<"End"<<endl;
}
