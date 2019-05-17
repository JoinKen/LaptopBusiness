CREATE DATABASE  IF NOT EXISTS `laptopbusiness` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `laptopbusiness`;
-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: laptopbusiness
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `account` (
  `idAccount` int(11) NOT NULL AUTO_INCREMENT,
  `phoneNumber` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `role` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`idAccount`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `address` (
  `idAddress` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `idUser` int(11) DEFAULT NULL,
  `idCustomer` int(11) DEFAULT NULL,
  PRIMARY KEY (`idAddress`),
  KEY `FK_Address_Cusomter` (`idCustomer`),
  CONSTRAINT `FK_Address_Cusomter` FOREIGN KEY (`idCustomer`) REFERENCES `cusomter` (`idcustomer`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `configureproduct`
--

DROP TABLE IF EXISTS `configureproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `configureproduct` (
  `idConfigureProduct` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `chip` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `ram` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `rom` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `display` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `weight` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `operation` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `connection` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `micro` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `powerConsumption` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `pin` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `wirelessConnectivity` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `outstandingFunction` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `describeDetails` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `idProduct` int(11) DEFAULT NULL,
  PRIMARY KEY (`idConfigureProduct`),
  KEY `FK_ConfigureProduct_Product` (`idProduct`),
  CONSTRAINT `FK_ConfigureProduct_Product` FOREIGN KEY (`idProduct`) REFERENCES `product` (`idproduct`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `configureproduct`
--

LOCK TABLES `configureproduct` WRITE;
/*!40000 ALTER TABLE `configureproduct` DISABLE KEYS */;
/*!40000 ALTER TABLE `configureproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cusomter`
--

DROP TABLE IF EXISTS `cusomter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `cusomter` (
  `idCustomer` int(11) NOT NULL AUTO_INCREMENT,
  `phoneNumber` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `typeCustomer` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `idAccount` int(11) DEFAULT NULL,
  PRIMARY KEY (`idCustomer`),
  KEY `FK_Cusomter_Account` (`idAccount`),
  CONSTRAINT `FK_Cusomter_Account` FOREIGN KEY (`idAccount`) REFERENCES `account` (`idaccount`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cusomter`
--

LOCK TABLES `cusomter` WRITE;
/*!40000 ALTER TABLE `cusomter` DISABLE KEYS */;
/*!40000 ALTER TABLE `cusomter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `employees` (
  `idEmployee` int(11) NOT NULL AUTO_INCREMENT,
  `fullName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `identityCard` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `birthDay` char(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `idAccount` int(11) DEFAULT NULL,
  PRIMARY KEY (`idEmployee`),
  KEY `FK_Employees_Account` (`idAccount`),
  CONSTRAINT `FK_Employees_Account` FOREIGN KEY (`idAccount`) REFERENCES `account` (`idaccount`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorites`
--

DROP TABLE IF EXISTS `favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `favorites` (
  `idFavorite` int(11) NOT NULL AUTO_INCREMENT,
  `idProduct` int(11) DEFAULT NULL,
  `idCustomer` int(11) DEFAULT NULL,
  PRIMARY KEY (`idFavorite`),
  KEY `FK_Favorites_Cusomter` (`idCustomer`),
  KEY `FK_Favorites_Product` (`idProduct`),
  CONSTRAINT `FK_Favorites_Cusomter` FOREIGN KEY (`idCustomer`) REFERENCES `cusomter` (`idcustomer`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_Favorites_Product` FOREIGN KEY (`idProduct`) REFERENCES `product` (`idproduct`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `feedback` (
  `idFeedBack` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `contentFeedBack` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `idCustomer` int(11) DEFAULT NULL,
  PRIMARY KEY (`idFeedBack`),
  KEY `FK_FeedBack_Cusomter` (`idCustomer`),
  CONSTRAINT `FK_FeedBack_Cusomter` FOREIGN KEY (`idCustomer`) REFERENCES `cusomter` (`idcustomer`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `image` (
  `idImage` int(11) NOT NULL AUTO_INCREMENT,
  `link` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `fileImage` longblob,
  `idProduct` int(11) DEFAULT NULL,
  PRIMARY KEY (`idImage`),
  KEY `FK_Image_Product` (`idProduct`),
  CONSTRAINT `FK_Image_Product` FOREIGN KEY (`idProduct`) REFERENCES `product` (`idproduct`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (1,'/upload/best_1.png',NULL,1),(2,'/upload/best_2.png',NULL,2),(3,'/upload/best_1.png',NULL,3),(4,'/upload/best_1.png',NULL,4),(5,'/upload/best_5.png',NULL,5),(6,'/upload/best_6.png',NULL,6),(7,'/upload/best_7.png',NULL,7);
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification`
--

DROP TABLE IF EXISTS `notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `notification` (
  `idNotification` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `contentNotification` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `idAccount` int(11) DEFAULT NULL,
  `idCustomer` int(11) DEFAULT NULL,
  PRIMARY KEY (`idNotification`),
  KEY `FK_Notification_Account` (`idAccount`),
  KEY `FK_Notification_Cusomter` (`idCustomer`),
  CONSTRAINT `FK_Notification_Account` FOREIGN KEY (`idAccount`) REFERENCES `account` (`idaccount`),
  CONSTRAINT `FK_Notification_Cusomter` FOREIGN KEY (`idCustomer`) REFERENCES `cusomter` (`idcustomer`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification`
--

LOCK TABLES `notification` WRITE;
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `order` (
  `idOrder` int(11) NOT NULL AUTO_INCREMENT,
  `idCustomer` int(11) DEFAULT NULL,
  `idEmployees` int(11) DEFAULT NULL,
  `pinId` int(11) DEFAULT NULL,
  `status` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `dateAdded` date DEFAULT NULL,
  `dateOK` date DEFAULT NULL,
  PRIMARY KEY (`idOrder`),
  KEY `FK_Order_Cusomter` (`idCustomer`),
  KEY `FK_Order_Employees` (`idEmployees`),
  CONSTRAINT `FK_Order_Account` FOREIGN KEY (`idEmployees`) REFERENCES `account` (`idaccount`),
  CONSTRAINT `FK_Order_Cusomter` FOREIGN KEY (`idCustomer`) REFERENCES `cusomter` (`idcustomer`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_Order_Employees` FOREIGN KEY (`idEmployees`) REFERENCES `employees` (`idemployee`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderdetails`
--

DROP TABLE IF EXISTS `orderdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `orderdetails` (
  `idOderDetail` int(11) NOT NULL AUTO_INCREMENT,
  `idProduct` int(11) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `status` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `dateOK` date DEFAULT NULL,
  `unitPrice` double DEFAULT NULL,
  `idOrder` int(11) DEFAULT NULL,
  PRIMARY KEY (`idOderDetail`),
  KEY `FK_OrderDetails_Order` (`idOrder`),
  KEY `FK_OrderDetails_Product` (`idProduct`),
  CONSTRAINT `FK_OrderDetails_Order` FOREIGN KEY (`idOrder`) REFERENCES `order` (`idorder`) ON UPDATE CASCADE,
  CONSTRAINT `FK_OrderDetails_Product` FOREIGN KEY (`idProduct`) REFERENCES `product` (`idproduct`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderdetails`
--

LOCK TABLES `orderdetails` WRITE;
/*!40000 ALTER TABLE `orderdetails` DISABLE KEYS */;
/*!40000 ALTER TABLE `orderdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paymethod`
--

DROP TABLE IF EXISTS `paymethod`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `paymethod` (
  `idPayMethod` int(11) NOT NULL AUTO_INCREMENT,
  `numberCard` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `validThrough` date DEFAULT NULL,
  `idCustomer` int(11) DEFAULT NULL,
  PRIMARY KEY (`idPayMethod`),
  KEY `FK_PayMethod_Cusomter` (`idCustomer`),
  CONSTRAINT `FK_PayMethod_Cusomter` FOREIGN KEY (`idCustomer`) REFERENCES `cusomter` (`idcustomer`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paymethod`
--

LOCK TABLES `paymethod` WRITE;
/*!40000 ALTER TABLE `paymethod` DISABLE KEYS */;
/*!40000 ALTER TABLE `paymethod` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `product` (
  `idProduct` int(11) NOT NULL AUTO_INCREMENT,
  `nameProduct` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `priceEntered` double DEFAULT NULL,
  `salePrice` double DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `dateAdded` date DEFAULT NULL,
  `describe` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`idProduct`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'123',123,123,123,'2019-09-09','123'),(2,'456',465,456,456,'2018-08-08','465'),(3,'789',789,789,789,'2017-07-07','789'),(4,'11',111,111,111,'2011-01-01','111'),(5,'2222',222,222,222,'2222-02-02','2222'),(6,'12312',3123,12312,3123,'2221-01-01','123123'),(7,'123',1231,23123,123,'2255-08-08','12321');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promotion`
--

DROP TABLE IF EXISTS `promotion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `promotion` (
  `idPromotion` int(11) NOT NULL AUTO_INCREMENT,
  `idProduct` int(11) DEFAULT NULL,
  `type` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `value` double DEFAULT NULL,
  `idImage` int(11) DEFAULT NULL,
  PRIMARY KEY (`idPromotion`),
  KEY `FK_Promotion_Product` (`idProduct`),
  CONSTRAINT `FK_Promotion_Product` FOREIGN KEY (`idProduct`) REFERENCES `product` (`idproduct`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotion`
--

LOCK TABLES `promotion` WRITE;
/*!40000 ALTER TABLE `promotion` DISABLE KEYS */;
INSERT INTO `promotion` VALUES (1,1,'DEAL','50%',0.5,NULL),(2,2,'ONSALE','25%',0.25,NULL),(3,3,'ONSALE','25%',0.25,NULL),(4,5,'DEAL','25%',0.4,NULL),(5,4,'ONSALE','25%',0.4,NULL);
/*!40000 ALTER TABLE `promotion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rate`
--

DROP TABLE IF EXISTS `rate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `rate` (
  `idRate` int(11) NOT NULL AUTO_INCREMENT,
  `numberOfStar` int(11) DEFAULT NULL,
  `contentRate` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `idProduct` int(11) DEFAULT NULL,
  `idCustomer` int(11) DEFAULT NULL,
  PRIMARY KEY (`idRate`),
  KEY `FK_Rate_Cusomter` (`idCustomer`),
  KEY `FK_Rate_Product` (`idProduct`),
  CONSTRAINT `FK_Rate_Cusomter` FOREIGN KEY (`idCustomer`) REFERENCES `cusomter` (`idcustomer`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `FK_Rate_Product` FOREIGN KEY (`idProduct`) REFERENCES `product` (`idproduct`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rate`
--

LOCK TABLES `rate` WRITE;
/*!40000 ALTER TABLE `rate` DISABLE KEYS */;
INSERT INTO `rate` VALUES (1,5,'Tuyeetj voiwf','OK',1,NULL),(2,4,'OK ngon','OK',1,NULL),(3,3,'Normal','Normal',2,NULL),(4,5,'Ã¡dasdasd','Ã¡dasd',4,NULL);
/*!40000 ALTER TABLE `rate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sysdiagrams`
--

DROP TABLE IF EXISTS `sysdiagrams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `sysdiagrams` (
  `name` varchar(160) NOT NULL,
  `principal_id` int(11) NOT NULL,
  `diagram_id` int(11) NOT NULL AUTO_INCREMENT,
  `version` int(11) DEFAULT NULL,
  `definition` longblob,
  PRIMARY KEY (`diagram_id`),
  UNIQUE KEY `UK_principal_name` (`principal_id`,`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sysdiagrams`
--

LOCK TABLES `sysdiagrams` WRITE;
/*!40000 ALTER TABLE `sysdiagrams` DISABLE KEYS */;
INSERT INTO `sysdiagrams` VALUES ('Diagram_ver1',1,1,1,_binary '\Ð\Ïà¡±\Z\á\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0>\0\0þÿ	\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0þÿÿÿ\0\0\0\0\0\0\0\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿýÿÿÿ\'\0\0\0þÿÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0	\0\0\0\n\0\0\0&\0\0\0\0\0\0\r\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\Z\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0!\0\0\0\"\0\0\0#\0\0\0$\0\0\0%\0\0\0þÿÿÿ>\0\0\0þÿÿÿ)\0\0\0*\0\0\0+\0\0\0,\0\0\0-\0\0\0.\0\0\0/\0\0\00\0\0\01\0\0\02\0\0\03\0\0\04\0\0\05\0\0\06\0\0\07\0\0\08\0\0\09\0\0\0:\0\0\0;\0\0\0<\0\0\0=\0\0\0þÿÿÿ?\0\0\0þÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿR\0o\0o\0t\0 \0E\0n\0t\0r\0y\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿÿÿÿÿÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0`}µ¾Y\Ý\Ô\0\0\0À\0\0\0\0\0\0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿÿÿÿÿÿÿÿÿÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\æ\0\0\0\0\0\0o\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\05\0\0\0\0\0\0\0C\0o\0m\0p\0O\0b\0j\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿÿÿÿÿÿÿÿÿÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0@\0\0\0_\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0	\0\0\0\n\0\0\0\0\0\0\0\0\0\r\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\Z\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0!\0\0\0\"\0\0\0#\0\0\0$\0\0\0%\0\0\0&\0\0\0\'\0\0\0(\0\0\0)\0\0\0*\0\0\0+\0\0\0,\0\0\0-\0\0\0.\0\0\0/\0\0\00\0\0\01\0\0\02\0\0\03\0\0\04\0\0\05\0\0\06\0\0\07\0\0\08\0\0\09\0\0\0:\0\0\0;\0\0\0<\0\0\0=\0\0\0>\0\0\0?\0\0\0þÿÿÿA\0\0\0þÿÿÿþÿÿÿD\0\0\0E\0\0\0F\0\0\0G\0\0\0H\0\0\0I\0\0\0J\0\0\0K\0\0\0L\0\0\0M\0\0\0N\0\0\0O\0\0\0P\0\0\0Q\0\0\0R\0\0\0S\0\0\0T\0\0\0U\0\0\0þÿÿÿþÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\04\0\nP\0\0€5\0\0\0\0ÿÿ2\0\0\05\0\0\0\0}\0\0·V\0\0\\9\0\0»\0\0ð\0\0 \êÿÿ8‹\0\0Þ€[ñ•\Ð° \0ª\0½\Ë\\\0\0\00\0\0\0\0\0\0\0\0\0<\0k\0\0\0	\0\0\0\0\0\0\0\Ù\æ°\é\Ð­Q\0 \ÉW9ô;„a\ÇC…5)†\á\ÕRø 2}²\Øb•B˜\'<%¢\Ú-\0\0(\0C\0\0\0\0\0\0\0SDM\Ò\ÑŽc\0`—\Ò\ßH4\É\Òwyw\Øp\0[„\rœ\0\0(\0C\0\0\0\0\0\0\0QDM\Ò\ÑŽc\0`—\Ò\ßH4\É\Òwyw\Øp\0[„\rœ5\0\0\0ð\0\0\0µ\0\0\00\0¥	\0\0\0\0€\0\0\0 \0\0\0€\0\0\0\0€SchGrid\0: \0\0\Ð \0\0Account\0\0\00\0¥	\0\0\0\0€\0\0\0 \0\0\0€\0\0\0\0€SchGrid\0Br\0\0 g\0\0Address\0\0\08\0¥	\0\0\0\0€\0\0\0²\0\0\0€\0\0\0\0€SchGrid\0¢0\0\0X˜\0\0ConfigureProduct\0\00\0¥	\0\0\0\0€\0\0\0¢\0\0\0€\0\0\0\0€SchGrid\0rQ\0\0^e\0\0Cusomter\0\0l\0¥	\0\0\0\0€\0\0\0R\0\0\0€\0\0C\0\0€Control\0‡g\0\0‘l\0\0Relationship \'FK_Address_Cusomter\' between \'Cusomter\' and \'Address\'\0\0\0(\0µ\0\0\0\0€\0\0\01\0\0\0Y\0\0\0€\0\0Control\0`g\0\0!l\0\0\0\0l\0¥	\0\0\0\0€\0\0\0b\0\0\0€\0\0C\0\0€ControlrO6\0\0(\0\0Relationship \'FK_Cusomter_Account\' between \'Account\' and \'Cusomter\'\0\0\0(\0µ\0\0\0\0€\0\0\01\0\0\0Y\0\0\0€\0\0Control\0\Ø@\0\0bL\0\0\0\04\0¥	\0\0\0\0€	\0\0\0¤\0\0\0€\0\0	\0\0€SchGridr\Ð \0\0\Ä;\0\0Employees\0\0\0\0\0p\0¥	\0\0\0\0€\n\0\0\0R\0\0\0€\0\0E\0\0€Control\0\Í0\0\0û/\0\0Relationship \'FK_Employees_Account\' between \'Account\' and \'Employees\'\0\0\0\0\0(\0µ\0\0\0\0€\0\0\01\0\0\0[\0\0\0€\0\0Control\0\Þ$\0\0·7\0\0\0\04\0¥	\0\0\0\0€\0\0\0¤\0\0\0€\0\0	\0\0€SchGridV^\0\0ø\Ù\0\0Favorites\0\0\0\0\0p\0¥	\0\0\0\0€\r\0\0\0Z\0\0\0€\0\0G\0\0€Control\0‡g\0\0\Åt\0\0Relationship \'FK_Favorites_Cusomter\' between \'Cusomter\' and \'Favorites\'\0\0\0(\0µ\0\0\0\0€\0\0\01\0\0\0]\0\0\0€\0\0Control\0±a\0\0Ê©\0\0\0\00\0¥	\0\0\0\0€\0\0\0¢\0\0\0€\0\0\0\0€SchGrid\0rQ\0\0\è€\0\0FeedBack\0\0p\0¥	\0\0\0\0€\0\0\0R\0\0\0€\0\0E\0\0€Control\0“[\0\0‰t\0\0Relationship \'FK_FeedBack_Cusomter\' between \'Cusomter\' and \'FeedBack\'s\'\0\0\0(\0µ\0\0\0\0€\0\0\01\0\0\0[\0\0\0€\0\0Control\0jO\0\0g|\0\0\0\00\0¥	\0\0\0\0€\0\0\0œ\0\0\0€\0\0\0\0€SchGridktõÿÿ\Ä\Ñ\0\0Imageidk\0\04\0¥	\0\0\0\0€\0\0\0ª\0\0\0€\0\0\0\0€SchGrid\0zX\0\0\â\0\0Notification\0\0t\0¥	\0\0\0\0€\0\0\0R\0\0\0€\0\0K\0\0€Control\0O6\0\0\'\"\0\0Relationship \'FK_Notification_Account\' between \'Account\' and \'Notification\'\0\0\0(\0µ\0\0\0\0€\0\0\01\0\0\0a\0\0\0€\0\0Control\0.B\0\0m$\0\0\0\0x\0¥	\0\0\0\0€\0\0\0R\0\0\0€\0\0M\0\0€Control\0¿\\\0\0„/\0\0Relationship \'FK_Notification_Cusomter\' between \'Cusomter\' and \'Notification\'\0\0\0\0\0(\0µ\0\0\0\0€\0\0\01\0\0\0c\0\0\0€\0\0Control\0_\0\0(F\0\0\0\00\0¥	\0\0\0\0€\0\0\0œ\0\0\0€\0\0\0\0€SchGrid\0¨ýÿÿ\Æ*\0\0Orderid\0\0\0h\0¥	\0\0\0\0€\0\0\0R\0\0\0€\0\0=\0\0€Control\0½\0\0\Å)\0\0Relationship \'FK_Order_Account\' between \'Account\' and \'Order\'\0\0\0\0\0(\0µ\0\0\0\0€\Z\0\0\01\0\0\0S\0\0\0€\0\0Control\0l\0\0U)\0\0\0\0h\0¥	\0\0\0\0€\0\0\0b\0\0\0€\0\0?\0\0€Control\0½\0\0m4\0\0Relationship \'FK_Order_Cusomter\' between \'Cusomter\' and \'Order\'\0\0\0(\0µ\0\0\0\0€\0\0\01\0\0\0U\0\0\0€\0\0Control\0#J\0\0\á3\0\0\0\0l\0¥	\0\0\0\0€\0\0\0R\0\0\0€\0\0A\0\0€Control\0½\0\0\Ã:\0\0Relationship \'FK_Order_Employees\' between \'Employees\' and \'Order\'ack\0\0(\0µ\0\0\0\0€\0\0\01\0\0\0W\0\0\0€\0\0Control\0\n\0\0S:\0\0\0\04\0¥	\0\0\0\0€\0\0\0ª\0\0\0€\0\0\0\0€SchGrid\0f!\0\04S\0\0OrderDetails\0\0p\0¥	\0\0\0\0€ \0\0\0b\0\0\0€\0\0G\0\0€ControlkU\0\0\ç>\0\0Relationship \'FK_OrderDetails_Order\' between \'Order\' and \'OrderDetails\'\0\0\0(\0µ\0\0\0\0€!\0\0\01\0\0\0]\0\0\0€\0\0Controlr=\0\0K\0\0\0\04\0¥	\0\0\0\0€\"\0\0\0¤\0\0\0€\0\0	\0\0€SchGrid\0fl\0\0\ÔI\0\0PayMethod\0\0\0\0\0p\0¥	\0\0\0\0€#\0\0\0b\0\0\0€\0\0G\0\0€Control\0f\0\0€V\0\0Relationship \'FK_PayMethod_Cusomter\' between \'Cusomter\' and \'PayMethod\'\0\0\0(\0µ\0\0\0\0€$\0\0\01\0\0\0]\0\0\0€\0\0Control\0\çk\0\0ü_\0\0\0\00\0¥	\0\0\0\0€%\0\0\0 \0\0\0€\0\0\0\0€SchGridk\î\0\0j•\0\0Productk\0\0|\0¥	\0\0\0\0€&\0\0\0R\0\0\0€\0\0S\0\0€Control\0\0\0! \0\0Relationship \'FK_ConfigureProduct_Product\' between \'Product\' and \'ConfigureProduct\'\0\0\0(\0µ\0\0\0\0€\'\0\0\01\0\0\0i\0\0\0€\0\0Control\0=\0\0g¢\0\0\0\0p\0¥	\0\0\0\0€(\0\0\0b\0\0\0€\0\0E\0\0€Control\0¥\r\0\0‹©\0\0Relationship \'FK_Favorites_Product\' between \'Product\' and \'Favorites\'d\'\0\0\0(\0µ\0\0\0\0€)\0\0\01\0\0\0[\0\0\0€\0\0Control\0*\0\0R\Ì\0\0\0\0h\0¥	\0\0\0\0€*\0\0\0b\0\0\0€\0\0=\0\0€Control\0±ÿÿÿ‹©\0\0Relationship \'FK_Image_Product\' between \'Product\' and \'Image\'\0\0\0\0\0(\0µ\0\0\0\0€+\0\0\01\0\0\0S\0\0\0€\0\0Control\0‹\0\0\á\Å\0\0\0\0t\0¥	\0\0\0\0€,\0\0\0b\0\0\0€\0\0K\0\0€Control\0¥\r\0\0Qg\0\0Relationship \'FK_OrderDetails_Product\' between \'Product\' and \'OrderDetails\'\0\0\0(\0µ\0\0\0\0€-\0\0\01\0\0\0a\0\0\0€\0\0Control\0.\0\04s\0\0\0\04\0¥	\0\0\0\0€.\0\0\0¤\0\0\0€\0\0	\0\0€SchGrid\0\0\0\0\0h[\0\0Promotion\0\0\0\0\0p\0¥	\0\0\0\0€/\0\0\0b\0\0\0€\0\0E\0\0€Control\0=\n\0\0\nm\0\0Relationship \'FK_Promotion_Product\' between \'Product\' and \'Promotion\'d\'\0\0\0(\0µ\0\0\0\0€0\0\0\01\0\0\0[\0\0\0€\0\0Control\0)\0\0ú}\0\0\0\0,\0¥	\0\0\0\0€1\0\0\0š\0\0\0€\0\0\0\0€SchGrid\0^\Z\0\0\\v\0\0Rate\0\0h\0¥	\0\0\0\0€2\0\0\0b\0\0\0€\0\0=\0\0€Control\0s0\0\0Sn\0\0Relationship \'FK_Rate_Cusomter\' between \'Cusomter\' and \'Rate\'\0\0\0\0\0(\0µ\0\0\0\0€3\0\0\01\0\0\0S\0\0\0€\0\0Control\0F?\0\0K~\0\0\0\0d\0¥	\0\0\0\0€4\0\0\0b\0\0\0€\0\0;\0\0€Control\0›\0\0þ‡\0\0Relationship \'FK_Rate_Product\' between \'Product\' and \'Rate\'r\0\0(\0µ\0\0\0\0€5\0\0\01\0\0\0Q\0\0\0€\0\0Control\0\"\0\0Á\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0!C4\0\0\0A\0\0\â\0\0xV4\0\0\0\0\0A\0c\0c\0o\0u\0n\0t\0\0\0r\0s\0\\\0i\0t\01\00\00\06\0\\\0A\0p\0p\0D\0a\0t\0a\0\\\0L\0o\0c\0a\0l\0\\\0I\0s\0o\0l\0a\0t\0e\0d\0S\0t\0o\0r\0a\0g\0e\0\\\0f\0t\03\0x\0l\0y\0p\0z\0.\0q\0h\04\0\\\00\0q\05\0g\0f\0g\0f\0i\0.\0y\0c\05\0\\\0P\0u\0b\0l\0i\0s\0h\0e\0r\0.\02\0n\0j\0a\0h\0a\02\0c\0u\0w\0z\0j\0a\0i\0y\01\0k\0d\0b\0z\0r\0n\0v\0i\0j\0x\0b\03\0b\0x\0y\0n\0\\\0A\0s\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0T\0\0\0,\0\0\0,\0\0\0,\0\0\04\0\0\0\0\0\0\0\0\0\0\0§)\0\09\0\0\0\0\0\0-\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0S\0\0¤\0\0\r\0\0h\0\0\Ý\0\0\0\0\Ñ\0\0\0\0\Þ\0\0£\0\0\0\0\0\0\0\0\0A\0\0\â\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0Ž\0\0\0\0\0\0\0\0\0ò\0\0N\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0ò\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0\0U2\0\0\Ý#\0\0\0\0\0\0\0\0\0\0\r\0\0\0\0\0\0\0\0\0\0\0÷\0\0›\n\0\0\0\0xV4\0\0\0X\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0	\0\0\0\n\0\0\0\0\0\0d\0b\0o\0\0\0\0\0\0A\0c\0c\0o\0u\0n\0t\0\0\0!C4\0\0\0A\0\0g\0\0xV4\0\0\0\0\0A\0d\0d\0r\0e\0s\0s\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0T\0\0\0,\0\0\0,\0\0\0,\0\0\04\0\0\0\0\0\0\0\0\0\0\0§)\0\09\0\0\0\0\0\0-\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0S\0\0¤\0\0\r\0\0h\0\0\Ý\0\0\0\0\Ñ\0\0\0\0\Þ\0\0£\0\0\0\0\0\0\0\0\0A\0\0g\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0Ž\0\0\0\0\0\0\0\0\0ò\0\0”\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0ò\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0\0U2\0\0\Ý#\0\0\0\0\0\0\0\0\0\0\r\0\0\0\0\0\0\0\0\0\0\0÷\0\0›\n\0\0\0\0xV4\0\0\0X\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0	\0\0\0\n\0\0\0\0\0\0d\0b\0o\0\0\0\0\0\0A\0d\0d\0r\0e\0s\0s\0\0\0!C4\0\0\0A\0\0+-\0\0xV4\0\0\0\0\0C\0o\0n\0f\0i\0g\0u\0r\0e\0P\0r\0o\0d\0u\0c\0t\0\0\0e\0r\0s\0i\0o\0n\0=\02\0.\00\0.\00\0.\00\0,\0 \0C\0u\0l\0t\0u\0r\0e\0=\0n\0e\0u\0t\0r\0a\0l\0,\0 \0P\0u\0b\0l\0i\0c\0K\0e\0y\0T\0o\0k\0e\0n\0=\0b\00\03\0f\05\0f\07\0f\01\01\0d\05\00\0a\03\0a\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0T\0\0\0,\0\0\0,\0\0\0,\0\0\04\0\0\0\0\0\0\0\0\0\0\0§)\0\0\Ý#\0\0\0\0\0\0-\0\0\r\0\0\0\0\0\0\0\0\0\0\0÷\0\0S\0\0¤\0\0\r\0\0h\0\0\Ý\0\0\0\0\Ñ\0\0\0\0\Þ\0\0£\0\0\0\0\0\0\0\0\0A\0\0+-\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0¬\0\0\0\0\0\0\0\0\0ò\0\0”\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0ò\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0\0U2\0\0\Ý#\0\0\0\0\0\0\0\0\0\0\r\0\0\0\0\0\0\0\0\0\0\0÷\0\0›\n\0\0\0\0xV4\0\0\0j\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0	\0\0\0\n\0\0\0\0\0\0d\0b\0o\0\0\0\0\0\0C\0o\0n\0f\0i\0g\0u\0r\0e\0P\0r\0o\0d\0u\0c\0t\0\0\0!C4\0\0\0A\0\0\â\0\0xV4\0\0\0\0\0C\0u\0s\0o\0m\0t\0e\0r\0\0\0\0\0\0+€\ÕÿÿÿÿÿÿÿÿªU\0\0\0\0\0\0+€\ÕÿÿªU\0\0\0\0\0\0\0\0\0\0\0\0\0\0UªÿÿªU\0\0\0\0\0+€\ÕÿÕ€+\0\0UªÿÿªU\0\0\0\0\0\0\0\0\0\0\0\0\0\0+€\ÕÿªU\0\0\0\0\0\0\0\0\0UªÿÕ€++€\ÕÿªU\0\0\0+€\ÕÿÿÿÿÿÿªU\0UªÿÕ€+\0\0\0\0\0\0\0\0\0+€\ÕÿªU+€\ÕÿªU\0\0\0\0\0\0\0\0+€\ÕÿªU\0UªÿÕ€+\0\0\0\0\0\0\0\0\0+€\ÕÿªU\0UªÿÕ€+\0\0\0\0\0\0\0+€\ÕÿªU\0+€\ÕÿªU\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0T\0\0\0,\0\0\0,\0\0\0,\0\0\04\0\0\0\0\0\0\0\0\0\0\0§)\0\09\0\0\0\0\0\0-\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0S\0\0¤\0\0\r\0\0h\0\0\Ý\0\0\0\0\Ñ\0\0\0\0\Þ\0\0£\0\0\0\0\0\0\0\0\0A\0\0\â\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0¬\0\0\0\0\0\0\0\0\0ò\0\0”\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0ò\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0\0U2\0\0\Ý#\0\0\0\0\0\0\0\0\0\0\r\0\0\0\0\0\0\0\0\0\0\0÷\0\0›\n\0\0\0\0xV4\0\0\0Z\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0	\0\0\0\n\0\0\0\0\0\0d\0b\0o\0\0\0	\0\0\0C\0u\0s\0o\0m\0t\0e\0r\0\0\0\0\0³h\0\0(n\0\0Br\0\0(n\0\0\0\0\0\0\0\0\0ððð\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0`g\0\0!l\0\0G\0\0X\0\01\0\0\0\0\0\0\0G\0\0X\0\0\0\0\0\0\0\0\0€\0\0€\0\0\0\0\0\0\0DB\0Tahoma\0F\0K\0_\0A\0d\0d\0r\0e\0s\0s\0_\0C\0u\0s\0o\0m\0t\0e\0r\0\0\0{7\0\0š)\0\0\ÎM\0\0š)\0\0\ÎM\0\0¤j\0\0rQ\0\0¤j\0\0\0\0\0\0\0\0\0ððð\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\Ø@\0\0bL\0\0G\0\0X\0\0>\0\0\0\0\0\0\0G\0\0X\0\0\0\0\0\0\0\0\0€\0\0€\0\0\0\0\0\0\0DB\0Tahoma\0F\0K\0_\0C\0u\0s\0o\0m\0t\0e\0r\0_\0A\0c\0c\0o\0u\0n\0t\0!C4\0\0\0A\0\0\â\0\0xV4\0\0\0\0\0E\0m\0p\0l\0o\0y\0e\0e\0s\0\0\0\0+€\ÕÿÿÿÿÿÿÿÿªU\0\0\0\0\0\0+€\ÕÿÿªU\0\0\0\0\0\0\0\0\0\0\0\0\0\0UªÿÿªU\0\0\0\0\0+€\ÕÿÕ€+\0\0UªÿÿªU\0\0\0\0\0\0\0\0\0\0\0\0\0\0+€\ÕÿªU\0\0\0\0\0\0\0\0\0UªÿÕ€++€\ÕÿªU\0\0\0+€\ÕÿÿÿÿÿÿªU\0UªÿÕ€+\0\0\0\0\0\0\0\0\0+€\ÕÿªU+€\ÕÿªU\0\0\0\0\0\0\0\0+€\ÕÿªU\0UªÿÕ€+\0\0\0\0\0\0\0\0\0+€\ÕÿªU\0UªÿÕ€+\0\0\0\0\0\0\0+€\ÕÿªU\0+€\ÕÿªU\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0T\0\0\0,\0\0\0,\0\0\0,\0\0\04\0\0\0\0\0\0\0\0\0\0\0§)\0\09\0\0\0\0\0\0-\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0S\0\0¤\0\0\r\0\0h\0\0\Ý\0\0\0\0\Ñ\0\0\0\0\Þ\0\0£\0\0\0\0\0\0\0\0\0A\0\0\â\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0Ž\0\0\0\0\0\0\0\0\0ò\0\0”\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0ò\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0\0U2\0\0\Ý#\0\0\0\0\0\0\0\0\0\0\r\0\0\0\0\0\0\0\0\0\0\0÷\0\0›\n\0\0\0\0xV4\0\0\0\\\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0	\0\0\0\n\0\0\0\0\0\0d\0b\0o\0\0\0\n\0\0\0E\0m\0p\0l\0o\0y\0e\0e\0s\0\0\0\0\0d2\0\0²2\0\0d2\0\0\Ä;\0\0\0\0\0\0\0\0\0ððð\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\Þ$\0\0·7\0\0\×\0\0X\0\0A\0\0\0\0\0\0\0\×\0\0X\0\0\0\0\0\0\0\0\0€\0\0€\0\0\0\0\0\0\0DB\0Tahoma\0F\0K\0_\0E\0m\0p\0l\0o\0y\0e\0e\0s\0_\0A\0c\0c\0o\0u\0n\0t\0!C4\0\0\0A\0\0\ì\0\0xV4\0\0\0\0\0F\0a\0v\0o\0r\0i\0t\0e\0s\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0UªÿÕ€+\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0UªÿÕ€+\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0UªÿÕ€+\0\0\0UªÿÕ€+\0\0\0\0\0+€\ÕÿÿÿÿÿÿÿªU\0\0\0\0UªÿÕ€+\0\0\0UªÿÕ€+\0\0\0UªÿÕ€+\0\0\0\0\0UªÕ€+\0\0UªÿÕ€+\0\0\0UªÿÕ€+\0\0+€\ÕÿÿÿÿÿÿÿÿÿÿÿÿªU\0\0UªÿÕ€+\0\0\0UªÿÕ€+\0\0+€\ÕÿªU\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0T\0\0\0,\0\0\0,\0\0\0,\0\0\04\0\0\0\0\0\0\0\0\0\0\0§)\0\09\0\0\0\0\0\0-\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0S\0\0¤\0\0\r\0\0h\0\0\Ý\0\0\0\0\Ñ\0\0\0\0\Þ\0\0£\0\0\0\0\0\0\0\0\0A\0\0\ì\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0¬\0\0\0\0\0\0\0\0\0ò\0\0\Ú\n\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0ò\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0\0U2\0\0\Ý#\0\0\0\0\0\0\0\0\0\0\r\0\0\0\0\0\0\0\0\0\0\0÷\0\0›\n\0\0\0\0xV4\0\0\0\\\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0	\0\0\0\n\0\0\0\0\0\0d\0b\0o\0\0\0\n\0\0\0F\0a\0v\0o\0r\0i\0t\0e\0s\0\0\0\0\0³h\0\0\\v\0\0To\0\0\\v\0\0To\0\0ø\Ù\0\0\0\0\0\0\0\0\0ððð\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0±a\0\0Ê©\0\0ô\0\0X\0\07\0\0\0\0\0\0\0ô\0\0X\0\0\0\0\0\0\0\0\0€\0\0€\0\0\0\0\0\0\0DB\0Tahoma\0F\0K\0_\0F\0a\0v\0o\0r\0i\0t\0e\0s\0_\0C\0u\0s\0o\0m\0t\0e\0r\0!C4\0\0\0A\0\0]\0\0xV4\0\0\0\0\0F\0e\0e\0d\0B\0a\0c\0k\0\0\0UªÿÿÿÕ€+\0\0\0\0\0+€\ÕÿªU\0\0\0UªÿÿªU\0\0\0\0\0+€\ÕÿÕ€+\0\0Uªÿ\Õ\Õ\ÕÕ€+\0\0\0\0+€\ÕÿªU\0+€\ÕÿªU\0\0\0\0\0\0\0\0\0UªÿÕ€+\0UªÿÕ€U€ÕªU\0\0\0+€\ÕÿªU\0UªÿÕ€+\0\0\0\0\0\0\0\0\0+€\ÕÿªU\0UªÿÕ€++€ÕªU\0\0+€\ÕÿªU\0UªÿÕ€+\0\0\0\0\0\0\0\0\0+€\ÕÿªU\0UªÿÕ€+\0\0UªÕ€++€\ÕÿªU\0+€\ÕÿªU\0\0\0\0\0\0\0\0\0UªÿÕ€+\0UªÿÕ€+\0\0\0U\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0T\0\0\0,\0\0\0,\0\0\0,\0\0\04\0\0\0\0\0\0\0\0\0\0\0§)\0\0\0\0\0\0\0\0-\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0S\0\0¤\0\0\r\0\0h\0\0\Ý\0\0\0\0\Ñ\0\0\0\0\Þ\0\0£\0\0\0\0\0\0\0\0\0A\0\0]\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0¬\0\0\0\0\0\0\0\0\0ò\0\0”\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0ò\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0\0U2\0\0\Ý#\0\0\0\0\0\0\0\0\0\0\r\0\0\0\0\0\0\0\0\0\0\0÷\0\0›\n\0\0\0\0xV4\0\0\0Z\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0	\0\0\0\n\0\0\0\0\0\0d\0b\0o\0\0\0	\0\0\0F\0e\0e\0d\0B\0a\0c\0k\0\0\0\0\0*]\0\0@w\0\0*]\0\0\è€\0\0\0\0\0\0\0\0\0ððð\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0jO\0\0g|\0\0\r\0\0X\0\0>\0\0\0\0\0\0\0\r\0\0X\0\0\0\0\0\0\0\0\0€\0\0€\0\0\0\0\0\0\0DB\0Tahoma\0F\0K\0_\0F\0e\0e\0d\0B\0a\0c\0k\0_\0C\0u\0s\0o\0m\0t\0e\0r\0!C4\0\0\0A\0\0g\0\0xV4\0\0\0\0\0I\0m\0a\0g\0e\0\0\0ÿÿªU\0\0\0\0\0+€\ÕÿÿÿÿÿÿÿÿªU\0\0\0\0\0\0+€\ÕÿÿªU\0\0\0\0\0\0\0\0\0\0\0\0\0\0UªÿÿªU\0\0\0\0\0+€\ÕÿÕ€+\0\0UªÿÿªU\0\0\0\0\0\0\0\0\0\0\0\0\0\0+€\ÕÿªU\0\0\0\0\0\0\0\0\0UªÿÕ€++€\ÕÿªU\0\0\0+€\ÕÿÿÿÿÿÿªU\0UªÿÕ€+\0\0\0\0\0\0\0\0\0+€\ÕÿªU+€\ÕÿªU\0\0\0\0\0\0\0\0+€\ÕÿªU\0UªÿÕ€+\0\0\0\0\0\0\0\0\0+€\ÕÿªU\0UªÿÕ€+\0\0\0\0\0\0\0+€\ÕÿªU\0+€\ÕÿªU\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0T\0\0\0,\0\0\0,\0\0\0,\0\0\04\0\0\0\0\0\0\0\0\0\0\0§)\0\09\0\0\0\0\0\0-\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0S\0\0¤\0\0\r\0\0h\0\0\Ý\0\0\0\0\Ñ\0\0\0\0\Þ\0\0£\0\0\0\0\0\0\0\0\0A\0\0g\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0Œ\n\0\0\0\0\0\0\0\0\0ò\0\0”\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0ò\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0\0U2\0\0\Ý#\0\0\0\0\0\0\0\0\0\0\r\0\0\0\0\0\0\0\0\0\0\0÷\0\0›\n\0\0\0\0xV4\0\0\0T\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0	\0\0\0\n\0\0\0\0\0\0d\0b\0o\0\0\0\0\0\0I\0m\0a\0g\0e\0\0\0!C4\0\0\0A\0\0]\0\0xV4\0\0\0\0\0N\0o\0t\0i\0f\0i\0c\0a\0t\0i\0o\0n\0\0\0ÿÿÿÿÿÿªU\0\0\0\0\0\0+€\ÕÿÿªU\0\0\0\0\0\0\0\0\0\0\0\0\0\0UªÿÿªU\0\0\0\0\0+€\ÕÿÕ€+\0\0UªÿÿªU\0\0\0\0\0\0\0\0\0\0\0\0\0\0+€\ÕÿªU\0\0\0\0\0\0\0\0\0UªÿÕ€++€\ÕÿªU\0\0\0+€\ÕÿÿÿÿÿÿªU\0UªÿÕ€+\0\0\0\0\0\0\0\0\0+€\ÕÿªU+€\ÕÿªU\0\0\0\0\0\0\0\0+€\ÕÿªU\0UªÿÕ€+\0\0\0\0\0\0\0\0\0+€\ÕÿªU\0UªÿÕ€+\0\0\0\0\0\0\0+€\ÕÿªU\0+€\ÕÿªU\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0T\0\0\0,\0\0\0,\0\0\0,\0\0\04\0\0\0\0\0\0\0\0\0\0\0§)\0\0\0\0\0\0\0\0-\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0S\0\0¤\0\0\r\0\0h\0\0\Ý\0\0\0\0\Ñ\0\0\0\0\Þ\0\0£\0\0\0\0\0\0\0\0\0A\0\0]\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0¬\0\0\0\0\0\0\0\0\0ò\0\0\Ú\n\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0ò\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0\0U2\0\0\Ý#\0\0\0\0\0\0\0\0\0\0\r\0\0\0\0\0\0\0\0\0\0\0÷\0\0›\n\0\0\0\0xV4\0\0\0b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0	\0\0\0\n\0\0\0\0\0\0d\0b\0o\0\0\0\r\0\0\0N\0o\0t\0i\0f\0i\0c\0a\0t\0i\0o\0n\0\0\0\0\0{7\0\0¾#\0\0zX\0\0¾#\0\0\0\0\0\0\0\0\0ððð\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0.B\0\0m$\0\0.\r\0\0X\0\06\0\0\0\0\0\0\0.\r\0\0X\0\0\0\0\0\0\0\0\0€\0\0€\0\0\0\0\0\0\0DB\0Tahoma\0F\0K\0_\0N\0o\0t\0i\0f\0i\0c\0a\0t\0i\0o\0n\0_\0A\0c\0c\0o\0u\0n\0t\0\0\0V^\0\0^e\0\0V^\0\0?2\0\0\0\0\0\0\0\0\0ððð\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0_\0\0(F\0\0ø\r\0\0X\0\0<\0\0\0\0\0\0\0ø\r\0\0X\0\0\0\0\0\0\0\0\0€\0\0€\0\0\0\0\0\0\0DB\0Tahoma\0F\0K\0_\0N\0o\0t\0i\0f\0i\0c\0a\0t\0i\0o\0n\0_\0C\0u\0s\0o\0m\0t\0e\0r\0!C4\0\0\0A\0\0\Ø\0\0xV4\0\0\0\0\0O\0r\0d\0e\0r\0\0\0ªU\0\0\0\0\0\0\0+€\ÕÿÿÿÿÿÿÿÕ€+\0\0\0\0\0\0+€\ÕÿªU\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0UªÿÿªU\0\0\0\0\0+€\ÕÿªU\0\0\0\0+€\ÕÿªU\0\0\0\0\0\0\0\0\0\0\0\0\0\0UªÿÕ€+\0\0\0\0\0+€\ÕÿÿÿªU\0\0\0+€\ÕÿÿÿÿÿÿÿÿÿÕ€+\0\0\0\0+€\ÕÿªU\0\0\0UªÿÿÕ€€ªÿÕ€+\0\0\0\0\0\0\0\0\0\0\0\0+€\ÕÿÿªU\0\0+€\ÕÿªUUªÿÿªU\0\0\0UªÿÕ€+\0\0\0\0\0\0\0\0\0\0\0\0\0+€\ÕÿÕ€+\0\0UªÿÿÿÕ€+\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0T\0\0\0,\0\0\0,\0\0\0,\0\0\04\0\0\0\0\0\0\0\0\0\0\0§)\0\0\Å\Z\0\0\0\0\0\0-\0\0	\0\0\0\0\0\0\0\0\0\0\0÷\0\0S\0\0¤\0\0\r\0\0h\0\0\Ý\0\0\0\0\Ñ\0\0\0\0\Þ\0\0£\0\0\0\0\0\0\0\0\0A\0\0\Ø\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0Ž\0\0\0\0\0\0\0\0\0ò\0\0\Ú\n\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0ò\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0\0U2\0\0\Ý#\0\0\0\0\0\0\0\0\0\0\r\0\0\0\0\0\0\0\0\0\0\0÷\0\0›\n\0\0\0\0xV4\0\0\0T\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0	\0\0\0\n\0\0\0\0\0\0d\0b\0o\0\0\0\0\0\0O\0r\0d\0e\0r\0\0\0\0\0: \0\0\\+\0\0\é\0\0\\+\0\0\0\0\0\0\0\0\0ððð\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\Z\0\0\0\0\0\0\0l\0\0U)\0\0@\n\0\0X\0\04\0\0\0\0\0\0\0@\n\0\0X\0\0\0\0\0\0\0\0\0€\0\0€\0\0\0\0\0\0\0DB\0Tahoma\0F\0K\0_\0O\0r\0d\0e\0r\0_\0A\0c\0c\0o\0u\0n\0t\0\0\0rQ\0\0(n\0\0VJ\0\0(n\0\0VJ\0\0\è5\0\0\é\0\0\è5\0\0\0\0\0\0\0\0\0ððð\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0#J\0\0\á3\0\0\n\0\0X\0\07\0\0\0\0\0\0\0\n\0\0X\0\0\0\0\0\0\0\0\0€\0\0€\0\0\0\0\0\0\0DB\0Tahoma\0F\0K\0_\0O\0r\0d\0e\0r\0_\0C\0u\0s\0o\0m\0t\0e\0r\0\0\0\Ð \0\0Z<\0\0\é\0\0Z<\0\0\0\0\0\0\0\0\0ððð\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\n\0\0S:\0\0š\0\0X\0\09\0\0\0\0\0\0\0š\0\0X\0\0\0\0\0\0\0\0\0€\0\0€\0\0\0\0\0\0\0DB\0Tahoma\0F\0K\0_\0O\0r\0d\0e\0r\0_\0E\0m\0p\0l\0o\0y\0e\0e\0s\0!C4\0\0\0A\0\0\Ø\0\0xV4\0\0\0\0\0O\0r\0d\0e\0r\0D\0e\0t\0a\0i\0l\0s\0\0\0Š@\0\0\0\0\0\0@\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ø\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\08Š@\0\0\0\0\0\0\0\0\0\0\0\0\08Š@\0\0\0\0\0\0\0@\0\0\0 \0\0\00\0\0\0\0\0\0\0\0\0\0\0\0(Š@\0\0\0\0\0\0@\0\0\0\0\0\0\0@\0\0\0\0\0\0\0@\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0@\0\0\0\0\0\0\0\0\0\0\0\0\0@\0\0\0\0\0\0@\0\0\0 \0\0\0 \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0T\0\0\0,\0\0\0,\0\0\0,\0\0\04\0\0\0\0\0\0\0\0\0\0\0§)\0\0\Å\Z\0\0\0\0\0\0-\0\0	\0\0\0\0\0\0\0\0\0\0\0÷\0\0S\0\0¤\0\0\r\0\0h\0\0\Ý\0\0\0\0\Ñ\0\0\0\0\Þ\0\0£\0\0\0\0\0\0\0\0\0A\0\0\Ø\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0Ž\0\0\0\0\0\0\0\0\0ò\0\0\Ú\n\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0ò\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0\0U2\0\0\Ý#\0\0\0\0\0\0\0\0\0\0\r\0\0\0\0\0\0\0\0\0\0\0÷\0\0›\n\0\0\0\0xV4\0\0\0b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0	\0\0\0\n\0\0\0\0\0\0d\0b\0o\0\0\0\r\0\0\0O\0r\0d\0e\0r\0D\0e\0t\0a\0i\0l\0s\0\0\0\0\0\ì\0\0žA\0\0\ì\0\0iJ\0\0ü!\0\0iJ\0\0ü!\0\04S\0\0\0\0\0\0\0\0\0ððð\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0!\0\0\0\0\0\0\0=\0\0K\0\0\0\0X\0\07\0\0\0\0\0\0\0\0\0X\0\0\0\0\0\0\0\0\0€\0\0€\0\0\0\0\0\0\0DB\0Tahoma\0F\0K\0_\0O\0r\0d\0e\0r\0D\0e\0t\0a\0i\0l\0s\0_\0O\0r\0d\0e\0r\0!C4\0\0\0A\0\0g\0\0xV4\0\0\0\0\0P\0a\0y\0M\0e\0t\0h\0o\0d\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0xp}\0\0\0\0\0\0\0\n\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\Ä\êu\ìZ\ìZ\0\0\0]\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0 Zp\Ù]\0\0\0\00Z\0\0\04p\Ù]\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0T\0\0\0,\0\0\0,\0\0\0,\0\0\04\0\0\0\0\0\0\0\0\0\0\0§)\0\09\0\0\0\0\0\0-\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0S\0\0¤\0\0\r\0\0h\0\0\Ý\0\0\0\0\Ñ\0\0\0\0\Þ\0\0£\0\0\0\0\0\0\0\0\0A\0\0g\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0¬\0\0\0\0\0\0\0\0\0ò\0\0”\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0ò\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0\0U2\0\0\Ý#\0\0\0\0\0\0\0\0\0\0\r\0\0\0\0\0\0\0\0\0\0\0÷\0\0›\n\0\0\0\0xV4\0\0\0\\\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0	\0\0\0\n\0\0\0\0\0\0d\0b\0o\0\0\0\n\0\0\0P\0a\0y\0M\0e\0t\0h\0o\0d\0\0\0\0\0¶g\0\0^e\0\0¶g\0\0M_\0\0ül\0\0M_\0\0ül\0\0;Y\0\0\0\0\0\0\0\0\0ððð\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0$\0\0\0\0\0\0\0\çk\0\0ü_\0\0ø\r\0\0X\0\07\0\0\0\0\0\0\0ø\r\0\0X\0\0\0\0\0\0\0\0\0€\0\0€\0\0\0\0\0\0\0DB\0Tahoma\0F\0K\0_\0P\0a\0y\0M\0e\0t\0h\0o\0d\0_\0C\0u\0s\0o\0m\0t\0e\0r\0!C4\0\0\0A\0\0\Ø\0\0xV4\0\0\0\0\0P\0r\0o\0d\0u\0c\0t\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0T\0\0\0,\0\0\0,\0\0\0,\0\0\04\0\0\0\0\0\0\0\0\0\0\0§)\0\0\Å\Z\0\0\0\0\0\0-\0\0	\0\0\0\0\0\0\0\0\0\0\0÷\0\0S\0\0¤\0\0\r\0\0h\0\0\Ý\0\0\0\0\Ñ\0\0\0\0\Þ\0\0£\0\0\0\0\0\0\0\0\0A\0\0\Ø\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0¬\0\0\0\0\0\0\0\0\0ò\0\0N\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0ò\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0\0U2\0\0\Ý#\0\0\0\0\0\0\0\0\0\0\r\0\0\0\0\0\0\0\0\0\0\0÷\0\0›\n\0\0\0\0xV4\0\0\0X\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0	\0\0\0\n\0\0\0\0\0\0d\0b\0o\0\0\0\0\0\0P\0r\0o\0d\0u\0c\0t\0\0\0\0\0/\Z\0\0¸¡\0\0¢0\0\0¸¡\0\0\0\0\0\0\0\0\0ððð\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\'\0\0\0\0\0\0\0=\0\0g¢\0\0U\0\0X\0\02\0\0\0\0\0\0\0U\0\0X\0\0\0\0\0\0\0ÿÿÿ\0\0\0€\0\0\0\0\0\0\0DB\0Tahoma\0F\0K\0_\0C\0o\0n\0f\0i\0g\0u\0r\0e\0P\0r\0o\0d\0u\0c\0t\0_\0P\0r\0o\0d\0u\0c\0t\0\0\0<\0\0B¬\0\0<\0\0£\Ë\0\0\Èd\0\0£\Ë\0\0\Èd\0\0ø\Ù\0\0\0\0\0\0\0\0\0ððð\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0)\0\0\0\0\0\0\0*\0\0R\Ì\0\0ñ\0\0X\0\06\0\0\0\0\0\0\0ñ\0\0X\0\0\0\0\0\0\0ÿÿÿ\0\0\0€\0\0\0\0\0\0\0DB\0Tahoma\0F\0K\0_\0F\0a\0v\0o\0r\0i\0t\0e\0s\0_\0P\0r\0o\0d\0u\0c\0t\0\0\0z\r\0\0B¬\0\0z\r\0\0£\Ë\0\0,\0\0£\Ë\0\0,\0\0\Ä\Ñ\0\0\0\0\0\0\0\0\0ððð\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0+\0\0\0\0\0\0\0‹\0\0\á\Å\0\0@\n\0\0X\0\07\0\0\0\0\0\0\0@\n\0\0X\0\0\0\0\0\0\0ÿÿÿ\0\0\0€\0\0\0\0\0\0\0DB\0Tahoma\0F\0K\0_\0I\0m\0a\0g\0e\0_\0P\0r\0o\0d\0u\0c\0t\0\0\0<\0\0j•\0\0<\0\0…r\0\0-\0\0…r\0\0-\0\0j\0\0\0\0\0\0\0\0\0ððð\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0-\0\0\0\0\0\0\0.\0\04s\0\0¡\r\0\0X\0\00\0\0\0\0\0\0\0¡\r\0\0X\0\0\0\0\0\0\0ÿÿÿ\0\0\0€\0\0\0\0\0\0\0DB\0Tahoma\0F\0K\0_\0O\0r\0d\0e\0r\0D\0e\0t\0a\0i\0l\0s\0_\0P\0r\0o\0d\0u\0c\0t\0!C4\0\0\0A\0\0]\0\0xV4\0\0\0\0\0P\0r\0o\0m\0o\0t\0i\0o\0n\0\0\0E\0C\0T\0 \0n\0a\0m\0e\0,\0 \0v\0a\0l\0u\0e\0 \0F\0R\0O\0M\0 \0s\0y\0s\0.\0e\0x\0t\0e\0n\0d\0e\0d\0_\0p\0r\0o\0p\0e\0r\0t\0i\0e\0s\0 \0W\0H\0E\0R\0E\0 \0(\0c\0l\0a\0s\0s\0 \0=\0 \01\0)\0 \0A\0N\0D\0 \0(\0m\0a\0j\0o\0r\0_\0i\0d\0 \0=\0 \0O\0B\0J\0E\0C\0T\0_\0I\0D\0(\0N\0\'\0[\0d\0b\0o\0]\0.\0[\0R\0a\0t\0e\0]\0\'\0)\0)\0 \0A\0N\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0T\0\0\0,\0\0\0,\0\0\0,\0\0\04\0\0\0\0\0\0\0\0\0\0\0§)\0\0\0\0\0\0\0\0-\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0S\0\0¤\0\0\r\0\0h\0\0\Ý\0\0\0\0\Ñ\0\0\0\0\Þ\0\0£\0\0\0\0\0\0\0\0\0A\0\0]\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0Ž\0\0\0\0\0\0\0\0\0ò\0\0”\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0ò\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0\0U2\0\0\Ý#\0\0\0\0\0\0\0\0\0\0\r\0\0\0\0\0\0\0\0\0\0\0÷\0\0›\n\0\0\0\0xV4\0\0\0\\\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0	\0\0\0\n\0\0\0\0\0\0d\0b\0o\0\0\0\n\0\0\0P\0r\0o\0m\0o\0t\0i\0o\0n\0\0\0\0\0z\r\0\0j•\0\0z\r\0\0…r\0\0¸\0\0…r\0\0¸\0\0\Åo\0\0\0\0\0\0\0\0\0ððð\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\00\0\0\0\0\0\0\0)\0\0ú}\0\0G\0\0X\0\07\0\0\0\0\0\0\0G\0\0X\0\0\0\0\0\0\0ÿÿÿ\0\0\0€\0\0\0\0\0\0\0DB\0Tahoma\0F\0K\0_\0P\0r\0o\0m\0o\0t\0i\0o\0n\0_\0P\0r\0o\0d\0u\0c\0t\0!C4\0\0\0A\0\0]\0\0xV4\0\0\0\0\0R\0a\0t\0e\0\0\0\0\0\0\0?\00\06\06\04\0¬\0L\0Q\0H\0V\0V\0\0\0\0\0A\0\0À@\0\0À@\0\0\à@\0\0À@\0\0A\0\0\à@\0\0À@\0\0À@\0\0À@\0\0À@\0\0 @\0\00A\0\0À@\0\0À@\0\0A\0\0A\0\0@@\0\0\à@\0\0À@\0\0 @\0\0 @\0\0@@\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0T\0\0\0,\0\0\0,\0\0\0,\0\0\04\0\0\0\0\0\0\0\0\0\0\0§)\0\0\0\0\0\0\0\0-\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0S\0\0¤\0\0\r\0\0h\0\0\Ý\0\0\0\0\Ñ\0\0\0\0\Þ\0\0£\0\0\0\0\0\0\0\0\0A\0\0]\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0Ž\0\0\0\0\0\0\0\0\0ò\0\0\Ú\n\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0ò\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0÷\0\0\0\0\0\0\0\0\0\0U2\0\0\Ý#\0\0\0\0\0\0\0\0\0\0\r\0\0\0\0\0\0\0\0\0\0\0÷\0\0›\n\0\0\0\0xV4\0\0\0R\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0	\0\0\0\n\0\0\0\0\0\0d\0b\0o\0\0\0\0\0\0R\0a\0t\0e\0\0\0\0\0rQ\0\0\êo\0\0\ÒL\0\0\êo\0\0\ÒL\0\0R€\0\0Ÿ1\0\0R€\0\0\0\0\0\0\0\0\0ððð\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\03\0\0\0\0\0\0\0F?\0\0K~\0\0z\n\0\0X\0\04\0\0\0\0\0\0\0z\n\0\0X\0\0\0\0\0\0\0ÿÿÿ\0\0\0€\0\0\0\0\0\0\0DB\0Tahoma\0F\0K\0_\0R\0a\0t\0e\0_\0C\0u\0s\0o\0m\0t\0e\0r\0\0\02\0\0j•\0\02\0\0\0\0ô\Z\0\0\0\0ô\Z\0\0¹Š\0\0\0\0\0\0\0\0\0ððð\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\05\0\0\0\0\0\0\0\"\0\0Á\0\0w	\0\0X\0\05\0\0\0\0\0\0\0w	\0\0X\0\0\0\0\0\0\0ÿÿÿ\0\0\0€\0\0\0\0\0\0\0DB\0Tahoma\0F\0K\0_\0R\0a\0t\0e\0_\0P\0r\0o\0d\0u\0c\0t\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0þÿ\n\0\0ÿÿÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0Microsoft DDS Form 2.0\0\0\0\0Embedded Object\0\0\0\0\0ô9²q\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0Na¼\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\Û\æ°\é\Ð­Q\0 \ÉW9\0\0\0@¾²¾Y\Ý\Ô\0\0HE\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ˆ\0\0D\0a\0t\0a\0 \0S\0o\0u\0r\0c\0e\0=\0D\0E\0S\0K\0T\0O\0P\01\00\00\06\0\\\0M\0S\0S\0Q\0L\01\00\00\06\0;\0I\0n\0i\0t\0i\0a\0l\0 \0C\0a\0t\0a\0l\0o\0g\0=\0L\0a\0p\0t\0o\0p\0B\0u\0s\0i\0n\0e\0s\0s\0;\0I\0n\0t\0e\0g\0r\0a\0t\0e\0d\0 \0S\0e\0c\0u\0r\0i\0t\0y\0=\0T\0r\0u\0e\0;\0M\0u\0l\0t\0i\0p\0l\0e\0A\0c\0t\0i\0v\0e\0R\0e\0s\0u\0l\0t\0S\0e\0t\0s\0=\0F\0a\0l\0s\0e\0;\0P\0a\0c\0k\0e\0t\0 \0S\0i\0z\0e\0\0D\0d\0s\0S\0t\0r\0e\0a\0m\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0(\0\0\0C*\0\0\0\0\0\0S\0c\0h\0e\0m\0a\0 \0U\0D\0V\0 \0D\0e\0f\0a\0u\0l\0t\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0&\0\0ÿÿÿÿÿÿÿÿÿÿÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0B\0\0\0\0\0\0\0\0\0\0D\0S\0R\0E\0F\0-\0S\0C\0H\0E\0M\0A\0-\0C\0O\0N\0T\0E\0N\0T\0S\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0,\0\0\0\0\0\0\0ÿÿÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0C\0\0\0’\0\0\0\0\0\0S\0c\0h\0e\0m\0a\0 \0U\0D\0V\0 \0D\0e\0f\0a\0u\0l\0t\0 \0P\0o\0s\0t\0 \0V\06\0\0\0\0\0\0\0\0\0\0\0\0\06\0\0ÿÿÿÿÿÿÿÿÿÿÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0V\0\0\0\0\0\0\0\0\0\0\0\0\0 \êÿÿ8‹\0\0\0&\0\0\0s\0c\0h\0_\0l\0a\0b\0e\0l\0s\0_\0v\0i\0s\0i\0b\0l\0e\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0d\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\Ð\0\0\0(\0\0\0A\0c\0t\0i\0v\0e\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0\0\0\0\0\0\0\0\0\01\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\00\0\0\0\0\0\0\0:\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\0,\01\08\07\05\0,\05\0,\01\02\04\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\01\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\01\09\00\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\02\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\03\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\04\0\0\0\0\0\0\0>\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\02\0,\02\07\01\05\0,\01\01\0,\01\06\06\05\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\Ð\0\0\0(\0\0\0A\0c\0t\0i\0v\0e\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0\0\0\0\0\0\0\0\0\01\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\00\0\0\0\0\0\0\0:\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\0,\01\08\07\05\0,\05\0,\01\02\04\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\01\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\01\09\00\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\02\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\03\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\04\0\0\0\0\0\0\0>\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\02\0,\02\07\01\05\0,\01\01\0,\01\06\06\05\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\Ð\0\0\0(\0\0\0A\0c\0t\0i\0v\0e\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0\0\0\0\0\0\0\0\0\01\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\00\0\0\0\0\0\0\0:\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\0,\01\08\07\05\0,\05\0,\01\02\04\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\01\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\02\00\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\02\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\03\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\04\0\0\0\0\0\0\0>\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\02\0,\02\07\01\05\0,\01\01\0,\01\06\06\05\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\Ð\0\0\0(\0\0\0A\0c\0t\0i\0v\0e\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0\0\0\0\0\0\0\0\0\01\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\00\0\0\0\0\0\0\0:\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\0,\01\08\07\05\0,\05\0,\01\02\04\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\01\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\02\00\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\02\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\03\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\04\0\0\0\0\0\0\0>\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\02\0,\02\07\01\05\0,\01\01\0,\01\06\06\05\0\0\0\0\0\0\0\0\0\0\0\0\08\0\0\0\0c\0\0\0\0d\0b\0o\0\0\0F\0K\0_\0A\0d\0d\0r\0e\0s\0s\0_\0C\0u\0s\0o\0m\0t\0e\0r\0\0\0\0\0\0\0\0\0\0\0\Ä\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ø(¸ø(\0\0\0\0\0\0\0\0­\0\0\0\0\0\0\0\0\0\0\0\0\0\0\08\0\0\0\0\0\0\0\0\0d\0b\0o\0\0\0F\0K\0_\0C\0u\0s\0o\0m\0t\0e\0r\0_\0A\0c\0c\0o\0u\0n\0t\0\0\0\0\0\0\0\0\0\0\0\Ä\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ú(xú(\0\0\0\0\0\0\0\0­\0\0\0\0\0	\0\0\0	\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\Ð\0\0\0(\0\0\0A\0c\0t\0i\0v\0e\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0\0\0\0\0\0\0\0\0\01\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\00\0\0\0\0\0\0\0:\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\0,\01\08\07\05\0,\05\0,\01\02\04\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\01\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\01\09\00\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\02\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\03\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\04\0\0\0\0\0\0\0>\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\02\0,\02\07\01\05\0,\01\01\0,\01\06\06\05\0\0\0\n\0\0\0\n\0\0\0\0\0\0\0:\0\0\0jS\"\0\0\0d\0b\0o\0\0\0F\0K\0_\0E\0m\0p\0l\0o\0y\0e\0e\0s\0_\0A\0c\0c\0o\0u\0n\0t\0\0\0\0\0\0\0\0\0\0\0\Ä\0\0\0\0\0\0\0\0\0\0\n\0\0\0\0\0\0ö(øö(\0\0\0\0\0\0\0\0­\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\Ð\0\0\0(\0\0\0A\0c\0t\0i\0v\0e\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0\0\0\0\0\0\0\0\0\01\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\00\0\0\0\0\0\0\0:\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\0,\01\08\07\05\0,\05\0,\01\02\04\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\01\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\02\00\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\02\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\03\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\04\0\0\0\0\0\0\0>\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\02\0,\02\07\01\05\0,\01\01\0,\01\06\06\05\0\0\0\r\0\0\0\r\0\0\0\0\0\0\0<\0\0\0jS\"\0\0\0d\0b\0o\0\0\0F\0K\0_\0F\0a\0v\0o\0r\0i\0t\0e\0s\0_\0C\0u\0s\0o\0m\0t\0e\0r\0\0\0\0\0\0\0\0\0\0\0\Ä\0\0\0\0\0\0\0\0\0\0\r\0\0\0\0\0\0ù(xù(\0\0\0\0\0\0\0\0­\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\Ð\0\0\0(\0\0\0A\0c\0t\0i\0v\0e\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0\0\0\0\0\0\0\0\0\01\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\00\0\0\0\0\0\0\0:\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\0,\01\08\07\05\0,\05\0,\01\02\04\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\01\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\02\00\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\02\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\03\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\04\0\0\0\0\0\0\0>\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\02\0,\02\07\01\05\0,\01\01\0,\01\06\06\05\0\0\0\0\0\0\0\0\0\0\0\0\0:\0\0\0jS\"\0\0\0d\0b\0o\0\0\0F\0K\0_\0F\0e\0e\0d\0B\0a\0c\0k\0_\0C\0u\0s\0o\0m\0t\0e\0r\0\0\0\0\0\0\0\0\0\0\0\Ä\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ö(¸ö(\0\0\0\0\0\0\0\0­\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\Ð\0\0\0(\0\0\0A\0c\0t\0i\0v\0e\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0\0\0\0\0\0\0\0\0\01\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\00\0\0\0\0\0\0\0:\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\0,\01\08\07\05\0,\05\0,\01\02\04\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\01\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\07\00\00\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\02\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\03\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\04\0\0\0\0\0\0\0>\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\02\0,\02\07\01\05\0,\01\01\0,\01\06\06\05\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\Ð\0\0\0(\0\0\0A\0c\0t\0i\0v\0e\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0\0\0\0\0\0\0\0\0\01\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\00\0\0\0\0\0\0\0:\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\0,\01\08\07\05\0,\05\0,\01\02\04\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\01\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\02\00\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\02\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\03\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\04\0\0\0\0\0\0\0>\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\02\0,\02\07\01\05\0,\01\01\0,\01\06\06\05\0\0\0\0\0\0\0\0\0\0\0\0\0@\0\0\0\0\0\0\0\0\0d\0b\0o\0\0\0F\0K\0_\0N\0o\0t\0i\0f\0i\0c\0a\0t\0i\0o\0n\0_\0A\0c\0c\0o\0u\0n\0t\0\0\0\0\0\0\0\0\0\0\0\Ä\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ú(8ú(\0\0\0\0\0\0\0\0­\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0B\0\0\0\ã_\0\0\0d\0b\0o\0\0\0F\0K\0_\0N\0o\0t\0i\0f\0i\0c\0a\0t\0i\0o\0n\0_\0C\0u\0s\0o\0m\0t\0e\0r\0\0\0\0\0\0\0\0\0\0\0\Ä\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\é(8\é(\0\0\0\0\0\0\0\0­\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\Ð\0\0\0(\0\0\0A\0c\0t\0i\0v\0e\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0\0\0\0\0\0\0\0\0\01\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\00\0\0\0\0\0\0\0:\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\0,\01\08\07\05\0,\05\0,\01\02\04\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\01\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\01\09\00\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\02\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\03\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\04\0\0\0\0\0\0\0>\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\02\0,\02\07\01\05\0,\01\01\0,\01\06\06\05\0\0\0\0\0\0\0\0\0\0\0\0\02\0\0\0\0\0\0\0\0\0d\0b\0o\0\0\0F\0K\0_\0O\0r\0d\0e\0r\0_\0A\0c\0c\0o\0u\0n\0t\0\0\0\0\0\0\0\0\0\0\0\Ä\0\0\0\0\Z\0\0\0\Z\0\0\0\0\0\0\0\0\0\é(x\é(\0\0\0\0\0\0\0\0­\0\0\0\0\0\0\0\0\0\0\0\0\0\0\04\0\0\0\Ú(\0\0\0d\0b\0o\0\0\0F\0K\0_\0O\0r\0d\0e\0r\0_\0C\0u\0s\0o\0m\0t\0e\0r\0\0\0\0\0\0\0\0\0\0\0\Ä\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\ï(x\ï(\0\0\0\0\0\0\0\0­\0\0\0\0\0\0\0\0\0\0\0\0\0\0\06\0\0\0\0\0\0\0\0\0d\0b\0o\0\0\0F\0K\0_\0O\0r\0d\0e\0r\0_\0E\0m\0p\0l\0o\0y\0e\0e\0s\0\0\0\0\0\0\0\0\0\0\0\Ä\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ø(xø(\0\0\0\0\0\0\0\0­\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\Ð\0\0\0(\0\0\0A\0c\0t\0i\0v\0e\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0\0\0\0\0\0\0\0\0\01\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\00\0\0\0\0\0\0\0:\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\0,\01\08\07\05\0,\05\0,\01\02\04\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\01\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\01\09\00\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\02\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\03\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\04\0\0\0\0\0\0\0>\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\02\0,\02\07\01\05\0,\01\01\0,\01\06\06\05\0\0\0 \0\0\0 \0\0\0\0\0\0\0<\0\0\0\0o\0\0\0\0d\0b\0o\0\0\0F\0K\0_\0O\0r\0d\0e\0r\0D\0e\0t\0a\0i\0l\0s\0_\0O\0r\0d\0e\0r\0\0\0\0\0\0\0\0\0\0\0\Ä\0\0\0\0!\0\0\0!\0\0\0 \0\0\0\0\0\0ù(8ù(\0\0\0\0\0\0\0\0­\0\0\0\0\0\"\0\0\0\"\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\Ð\0\0\0(\0\0\0A\0c\0t\0i\0v\0e\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0\0\0\0\0\0\0\0\0\01\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\00\0\0\0\0\0\0\0:\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\0,\01\08\07\05\0,\05\0,\01\02\04\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\01\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\02\00\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\02\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\03\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\04\0\0\0\0\0\0\0>\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\02\0,\02\07\01\05\0,\01\01\0,\01\06\06\05\0\0\0#\0\0\0#\0\0\0\0\0\0\0<\0\0\0\0\0\0\0\0\0d\0b\0o\0\0\0F\0K\0_\0P\0a\0y\0M\0e\0t\0h\0o\0d\0_\0C\0u\0s\0o\0m\0t\0e\0r\0\0\0\0\0\0\0\0\0\0\0\Ä\0\0\0\0$\0\0\0$\0\0\0#\0\0\0\0\0\0ù(¸ù(\0\0\0\0\0\0\0\0­\0\0\0\0\0%\0\0\0%\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\Ð\0\0\0(\0\0\0A\0c\0t\0i\0v\0e\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0\0\0\0\0\0\0\0\0\01\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\00\0\0\0\0\0\0\0:\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\0,\01\08\07\05\0,\05\0,\01\02\04\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\01\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\02\00\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\02\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\03\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\04\0\0\0\0\0\0\0>\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\02\0,\02\07\01\05\0,\01\01\0,\01\06\06\05\0\0\0&\0\0\0&\0\0\0\0\0\0\0H\0\0\0\ã_\0\0\0d\0b\0o\0\0\0F\0K\0_\0C\0o\0n\0f\0i\0g\0u\0r\0e\0P\0r\0o\0d\0u\0c\0t\0_\0P\0r\0o\0d\0u\0c\0t\0\0\0\0\0\0\0\0\0\0\0\Ä\0\0\0\0\'\0\0\0\'\0\0\0&\0\0\0\0\0\0ü(xü(\0\0\0\0\0\0\0\0­\0\0\0\0\0(\0\0\0(\0\0\0\0\0\0\0:\0\0\0jS\"\0\0\0d\0b\0o\0\0\0F\0K\0_\0F\0a\0v\0o\0r\0i\0t\0e\0s\0_\0P\0r\0o\0d\0u\0c\0t\0\0\0\0\0\0\0\0\0\0\0\Ä\0\0\0\0)\0\0\0)\0\0\0(\0\0\0\0\0\0ô(8ô(\0\0\0\0\0\0\0\0­\0\0\0\0\0*\0\0\0*\0\0\0\0\0\0\02\0\0\0\0\0\0\0\0\0d\0b\0o\0\0\0F\0K\0_\0I\0m\0a\0g\0e\0_\0P\0r\0o\0d\0u\0c\0t\0\0\0\0\0\0\0\0\0\0\0\Ä\0\0\0\0+\0\0\0+\0\0\0*\0\0\0\0\0\0÷(x÷(\0\0\0\0\0\0\0\0­\0\0\0\0\0,\0\0\0,\0\0\0\0\0\0\0@\0\0\0\0O\0\0\0\0d\0b\0o\0\0\0F\0K\0_\0O\0r\0d\0e\0r\0D\0e\0t\0a\0i\0l\0s\0_\0P\0r\0o\0d\0u\0c\0t\0\0\0\0\0\0\0\0\0\0\0\Ä\0\0\0\0-\0\0\0-\0\0\0,\0\0\0\0\0\0ù(øù(\0\0\0\0\0\0\0\0­\0\0\0\0\0.\0\0\0.\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\Ð\0\0\0(\0\0\0A\0c\0t\0i\0v\0e\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0\0\0\0\0\0\0\0\0\01\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\00\0\0\0\0\0\0\0:\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\0,\01\08\07\05\0,\05\0,\01\02\04\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\01\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\01\09\00\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\02\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\03\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\04\0\0\0\0\0\0\0>\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\02\0,\02\07\01\05\0,\01\01\0,\01\06\06\05\0\0\0/\0\0\0/\0\0\0\0\0\0\0:\0\0\0\0o\0\0\0\0d\0b\0o\0\0\0F\0K\0_\0P\0r\0o\0m\0o\0t\0i\0o\0n\0_\0P\0r\0o\0d\0u\0c\0t\0\0\0\0\0\0\0\0\0\0\0\Ä\0\0\0\00\0\0\00\0\0\0/\0\0\0\0\0\0û(8û(\0\0\0\0\0\0\0\0­\0\0\0\0\01\0\0\01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\Ð\0\0\0(\0\0\0A\0c\0t\0i\0v\0e\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0\0\0\0\0\0\0\0\0\01\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\00\0\0\0\0\0\0\0:\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\0,\01\08\07\05\0,\05\0,\01\02\04\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\01\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\01\09\00\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\02\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\03\0\0\0\0\0\0\0\0\0\02\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0\0\0 \0\0\0T\0a\0b\0l\0e\0V\0i\0e\0w\0M\0o\0d\0e\0:\04\0\0\0\0\0\0\0>\0\0\04\0,\00\0,\02\08\04\0,\00\0,\02\02\09\05\0,\01\02\0,\02\07\01\05\0,\01\01\0,\01\06\06\05\0\0\02\0\0\02\0\0\0\0\0\0\02\0\0\0\Õ(\0\0\0d\0b\0o\0\0\0F\0K\0_\0R\0a\0t\0e\0_\0C\0u\0s\0o\0m\0t\0e\0r\0\0\0\0\0\0\0\0\0\0\0\Ä\0\0\0\03\0\0\03\0\0\02\0\0\0\0\0\0ø(øø(\0\0\0\0\0\0\0\0­\0\0\0\0\04\0\0\04\0\0\0\0\0\0\00\0\0\0\0i\0\0\0\0d\0b\0o\0\0\0F\0K\0_\0R\0a\0t\0e\0_\0P\0r\0o\0d\0u\0c\0t\0\0\0\0\0\0\0\0\0\0\0\Ä\0\0\0\05\0\0\05\0\0\04\0\0\0\0\0\0õ(xõ(\0\0\0\0\0\0\0\0­\0\0\0\0\0_\0\0\0\0\0\0\0\0\0\0\0\0i\0\0\0\\\0\0\0\n\0\0\0\0\0\0	\0\0\0=\0\0\0:\0\0\0\0\0\0\0\0\0\0\0\0U\0\0\0^\0\0\0\0\0\0\0\0\0\0\0\0n\0\0\0M\0\0\0\0\0\0\0\0\0\0\0\0i\0\0\0b\0\0\0\r\0\0\0\0\0\0\0\0\0…\0\0\08\0\0\0\0\0\0\0\0\0\0\0\0\'\0\0\0&\0\0\0\0\0\0\0\0\0\0\0\0*\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0h\0\0\0q\0\0\0#\0\0\0\0\0\0\"\0\0\0J\0\0\0\0\0\02\0\0\0\0\0\01\0\0\0n\0\0\0m\0\0\0\0\0\0	\0\0\0\0\0\0L\0\0\0‡\0\0\0 \0\0\0\0\0\0\0\0\0K\0\0\0\0\0\0\0&\0\0\0%\0\0\0\0\0\0u\0\0\0j\0\0\0(\0\0\0%\0\0\0\0\0\0)\0\0\0\0\0\0*\0\0\0%\0\0\0\0\0\0#\0\0\0&\0\0\0,\0\0\0%\0\0\0\0\0\0(\0\0\0\'\0\0\0/\0\0\0%\0\0\0.\0\0\0\"\0\0\0\'\0\0\04\0\0\0%\0\0\01\0\0\0J\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0=\04\00\09\06\0;\0A\0p\0p\0l\0i\0c\0a\0t\0i\0o\0n\0 \0N\0a\0m\0e\0=\0\"\0M\0i\0c\0r\0o\0s\0o\0f\0t\0 \0S\0Q\0L\0 \0S\0e\0r\0v\0e\0r\0 \0M\0a\0n\0a\0g\0e\0m\0e\0n\0t\0 \0S\0t\0u\0d\0i\0o\0\"\0\0\0\0€\0\Z\0\0\0D\0i\0a\0g\0r\0a\0m\0_\0v\0e\0r\01\0\0\0\0&\0\n\0\0\0R\0a\0t\0e\0\0\0\0\0\0d\0b\0o\0\0\0\0&\0\0\0\0P\0r\0o\0m\0o\0t\0i\0o\0n\0\0\0\0\0\0d\0b\0o\0\0\0\0&\0\0\0\0P\0r\0o\0d\0u\0c\0t\0\0\0\0\0\0d\0b\0o\0\0\0\0&\0\0\0\0P\0a\0y\0M\0e\0t\0h\0o\0d\0\0\0\0\0\0d\0b\0o\0\0\0\0&\0\Z\0\0\0O\0r\0d\0e\0r\0D\0e\0t\0a\0i\0l\0s\0\0\0\0\0\0d\0b\0o\0\0\0\0&\0\0\0\0O\0r\0d\0e\0r\0\0\0\0\0\0d\0b\0o\0\0\0\0&\0\Z\0\0\0N\0o\0t\0i\0f\0i\0c\0a\0t\0i\0o\0n\0\0\0\0\0\0d\0b\0o\0\0\0\0&\0\0\0\0I\0m\0a\0g\0e\0\0\0\0\0\0d\0b\0o\0\0\0\0&\0\0\0\0F\0e\0e\0d\0B\0a\0c\0k\0\0\0\0\0\0d\0b\0o\0\0\0\0&\0\0\0\0F\0a\0v\0o\0r\0i\0t\0e\0s\0\0\0\0\0\0d\0b\0o\0\0\0\0&\0\0\0\0E\0m\0p\0l\0o\0y\0e\0e\0s\0\0\0\0\0\0d\0b\0o\0\0\0\0&\0\0\0\0C\0u\0s\0o\0m\0t\0e\0r\0\0\0\0\0\0d\0b\0o\0\0\0\0&\0\"\0\0\0C\0o\0n\0f\0i\0g\0u\0r\0e\0P\0r\0o\0d\0u\0c\0t\0\0\0\0\0\0d\0b\0o\0\0\0\0&\0\0\0\0A\0d\0d\0r\0e\0s\0s\0\0\0\0\0\0d\0b\0o\0\0\0\0$\0\0\0\0A\0c\0c\0o\0u\0n\0t\0\0\0\0\0\0d\0b\0o\0\0\0\0\0\0Ö…	³»kòEš¸7dð2p\0N\0\0\0{\01\06\03\04\0C\0D\0D\07\0-\00\08\08\08\0-\04\02\0E\03\0-\09\0F\0A\02\0-\0B\06\0D\03\02\05\06\03\0B\09\01\0D\0}\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0bˆR');
/*!40000 ALTER TABLE `sysdiagrams` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-17 16:20:24
