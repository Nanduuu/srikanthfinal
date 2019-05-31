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
INSERT INTO `ques` VALUES (1,1,'What is CyberArc','2019-05-13 03:16:32'),(2,1,'WHY CYBERARK','2019-05-13 03:19:20'),(3,1,'What is cyber Arc','2019-05-24 04:46:17'),(4,4,'what is Devops ?','2019-05-31 01:45:39'),(5,1,'what is cyber Ark ?','2019-05-31 01:53:14'),(6,1,'hahaha','2019-05-31 01:56:06'),(7,1,'what ','2019-05-31 01:57:14'),(8,1,'what ','2019-05-31 01:58:12'),(9,1,'what is ark','2019-05-31 01:58:34'),(10,1,'what ','2019-05-31 01:59:16'),(11,1,'what ','2019-05-31 02:02:49'),(12,1,'what ','2019-05-31 02:04:05'),(13,7,'what ','2019-05-31 02:13:34'),(14,8,'Hello','2019-05-31 02:45:03');
/*!40000 ALTER TABLE `ques` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-31  3:34:41
