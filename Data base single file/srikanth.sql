CREATE DATABASE  IF NOT EXISTS `srikanth` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `srikanth`;
-- MySQL dump 10.13  Distrib 5.6.23, for Win64 (x86_64)
--
-- Host: localhost    Database: srikanth
-- ------------------------------------------------------
-- Server version	5.6.24-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `answer` (
  `ans_num` int(11) NOT NULL,
  `ques_num` int(11) NOT NULL,
  `answer` text NOT NULL,
  `likes` int(11) NOT NULL,
  `dislikes` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ans_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
INSERT INTO `answer` VALUES (1,18,'answer',14,9,'2019-06-18 04:42:57'),(2,5,'third @ question',0,0,'2019-06-18 04:45:19'),(3,18,'second answer',1,0,'2019-06-18 05:06:55'),(4,18,'second answer',0,0,'2019-06-18 05:07:10'),(5,18,'third answer',0,0,'2019-06-18 05:09:58'),(6,16,'first comment',3,0,'2019-06-18 05:11:20'),(7,16,'second comment',0,0,'2019-06-18 05:11:39'),(8,1,'first comment',0,0,'2019-06-18 05:14:49'),(9,1,'second comment',0,0,'2019-06-18 05:15:00'),(10,1,'lksjdflkasjfdlk comment',0,0,'2019-06-18 05:15:33'),(11,1,' comment',0,0,'2019-06-18 05:16:56'),(12,18,'sarigama padanisha',0,0,'2019-06-18 05:18:57'),(13,18,'sarigama padanisha',0,0,'2019-06-18 05:19:12'),(14,18,'nanda kumar',0,0,'2019-06-18 05:20:58'),(15,5,'second comment',0,0,'2019-06-18 05:21:49'),(16,4,'trending technology',0,0,'2019-06-18 05:22:32'),(17,16,'third comment',0,0,'2019-06-18 05:23:52');
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ques`
--

DROP TABLE IF EXISTS `ques`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ques` (
  `ques_num` int(11) NOT NULL,
  `tech_num` int(11) NOT NULL,
  `question` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ques_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ques`
--

LOCK TABLES `ques` WRITE;
/*!40000 ALTER TABLE `ques` DISABLE KEYS */;
INSERT INTO `ques` VALUES (1,1,'What is CyberArc','2019-05-13 03:16:32'),(4,4,'what is Devops ?','2019-05-31 01:45:39'),(5,1,'what is cyber Ark ?','2019-05-31 01:53:14'),(15,8,'What is big data ? ','2019-06-03 01:53:26'),(16,1,'Explain what is cyber Ark ?','2019-06-17 09:15:05'),(17,3,'Explain what is Splunk ?','2019-06-17 09:16:34'),(18,1,'since from when cybarark?','2019-06-17 10:54:43');
/*!40000 ALTER TABLE `ques` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tech`
--

DROP TABLE IF EXISTS `tech`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tech` (
  `tech_num` int(11) NOT NULL,
  `technology` varchar(45) NOT NULL,
  PRIMARY KEY (`tech_num`),
  UNIQUE KEY `tech_num_UNIQUE` (`tech_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tech`
--

LOCK TABLES `tech` WRITE;
/*!40000 ALTER TABLE `tech` DISABLE KEYS */;
INSERT INTO `tech` VALUES (1,'CyberArk'),(2,'Sailpoint'),(3,'Splunk'),(4,'Devops'),(5,'AWS'),(6,'C,C++'),(7,'Salesforce (Both Admin and Developer)'),(8,'Big Data'),(9,'Tableau'),(10,'QlikView'),(11,'Cognos'),(12,'BLOCKCHAIN'),(13,'Ping federate'),(14,'CA Siteminder'),(15,'Ping Access'),(16,'NetIQ'),(17,'NetIQ Governance and Access manager'),(18,'ISAM'),(19,'WebSphere (Both Admin and Developer)'),(20,'Weblogic (Both Admin and Developer)'),(21,'IDM'),(22,'SSO'),(23,'Embedded IOT'),(24,'ERUBY on RAILS'),(25,'MICROSTRATEGY'),(26,'Sharepoint (Both Admin and Developer)'),(27,'SAS'),(28,'Full stack Developer'),(29,'Angular2,Angular3'),(30,'ETL,Datastage'),(31,'Qlikview'),(32,'Qliksense'),(33,'Tableau'),(34,'Microstrategy'),(35,'Data science'),(36,'BIG Data Hadoop'),(37,'Artifical Intelligence'),(38,'R'),(39,'Python'),(40,'Machine learning'),(41,'SQl,PLSQL'),(42,'Testing (Manual,Automation)'),(43,'Java backend (Struts, Hybernates)'),(44,'CCNA,CCNP,CCIE'),(45,'Linux,shell scripting');
/*!40000 ALTER TABLE `tech` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'srikanth'
--

--
-- Dumping routines for database 'srikanth'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-18  6:26:33
