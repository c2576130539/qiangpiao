-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 2018-09-12 05:35:17
-- 服务器版本： 5.7.18
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cAuth`
--

-- --------------------------------------------------------

--
-- 表的结构 `movie`
--

CREATE TABLE `movie` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `casts` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `directors` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagessmall` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imageslarge` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `original_title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(1048) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='电影信息';

--
-- 转存表中的数据 `movie`
--

INSERT INTO `movie` (`id`, `casts`, `directors`, `imagessmall`, `imageslarge`, `original_title`, `rating`, `title`) VALUES
('26336252', '汤姆·克鲁斯 亨利·卡维尔 文·瑞姆斯', '克里斯托弗·麦奎里', 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529365085.jpg', 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529365085.jpg', 'Mission: Impossible - Fallout', '8.3', '碟中谍6：全面瓦解'),
('26810318', '柯蒂·斯密特-麦菲 娜塔莎·迈尔兹 蕾奥娜·维埃拉', '艾尔伯特·休斯', 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2530871439.jpg', 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2530871439.jpg', 'Alpha', '6.5', '阿尔法：狼伴归途'),
('26954268', '聂远 谭凯 徐露', '姜凯阳', 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2530863118.jpg', 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2530863118.jpg', '道高一丈', '5.3', '道高一丈'),
('3073268', '凯文·德·保拉 莱昂纳多·利马·卡瓦柳 索·豪黑', '杰夫·泽姆巴利斯特 迈克尔·泽姆巴利斯特', 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2531286907.jpg', 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2531286907.jpg', 'Pelé: Birth of a Legend', '7.6', '传奇的诞生');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
