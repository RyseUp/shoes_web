create database data_web2;
use data_web2;

create table Category(
    ID int auto_increment ,
    Name nvarchar(255) not null ,
    CONSTRAINT PK_Category PRIMARY KEY (ID)
);

create table Brand(
    ID int auto_increment ,
    Name nvarchar(255) not null ,
    CONSTRAINT PK_Brand PRIMARY KEY (ID)
);

create table Product(
    ID int auto_increment ,
    Price float not null ,
    Name nvarchar(255) not null ,
    Size nvarchar(255) not null ,
    Quantity int not null ,
    Category_ID int not null ,
    Brand_ID int not null ,
    CONSTRAINT PK_Product PRIMARY KEY (ID) ,
    CONSTRAINT FK1_Product FOREIGN KEY (Category_ID)
                    REFERENCES Category(ID),
    CONSTRAINT FK2_Product FOREIGN KEY (Brand_ID)
                    REFERENCES Brand(ID)
);

create table User(
    ID int auto_increment ,
    Username nvarchar(255) not null ,
    Name nvarchar(255) not null ,
    Phone int not null ,
    Address nvarchar(255) null ,
    Password nvarchar(255) not null ,
    Type nvarchar(255) not null ,
    CONSTRAINT PK_User PRIMARY KEY (ID)
);

create table Orders(
    ID int auto_increment ,
    Customer_ID int not null ,
    BuyDate nvarchar(255) not null ,
    CONSTRAINT PK_Order PRIMARY KEY (ID) ,
    CONSTRAINT FK_Order FOREIGN KEY (Customer_ID)
                  REFERENCES User(ID)
);

create table Order_Detail(
    Order_ID int not null ,
    Product_ID int not null ,
    Quantity int not null ,
    CONSTRAINT FK1_Order_Detail FOREIGN KEY (Order_ID)
                         REFERENCES Orders(ID) ,
    CONSTRAINT FK2_Order_Detail FOREIGN KEY (Product_ID)
                         REFERENCES Product(ID)
);