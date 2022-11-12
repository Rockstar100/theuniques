-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 27, 2022 at 06:05 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `teachlearn_blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `full_name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `full_name`, `email`, `password`) VALUES
(1, 'Naveen Jaiswal', 'boyrockstar200@gmail.com', 'admin@123');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'frontend'),
(2, 'graphic Design'),
(3, 'web devlopment'),
(7, 'backend');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `comment` text NOT NULL,
  `post_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `name`, `comment`, `post_id`, `created_at`, `email`) VALUES
(3, 'cjwnjvnwjv', 's cn me cev ', 1, '2022-08-02 07:02:44', 'potap24813@spruzme.com'),
(4, 'Nk', 'dfgh', 2, '2022-08-06 16:48:50', 'abc@abc.com');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `post_id`, `image`) VALUES
(1, 1, 'motivation 27 07.png'),
(2, 3, '1.jpg'),
(3, 4, '74pZ.gif'),
(4, 6, 'Untitled design.gif'),
(5, 2, '2.jpg'),
(6, 8, 'Screenshot 2022-08-05 111824.jpg'),
(7, 9, 'Screenshot 2022-08-05 111824.jpg'),
(8, 10, 'Screenshot 2022-08-05 111824.jpg'),
(9, 11, 'techlearns2.png'),
(10, 12, 'Yellow Floral Raksha Bandhan Card.png'),
(11, 13, 'Yellow Floral Raksha Bandhan Card.png'),
(12, 14, 'Yellow Floral Raksha Bandhan Card.png'),
(13, 15, 'Screenshot 2022-08-01 102649.jpg'),
(14, 16, 'Screenshot 2022-08-01 102624.jpg'),
(15, 17, 'director sectorial.jpg'),
(16, 18, 'director sectorial.jpg'),
(17, 19, 'director sectorial.jpg'),
(18, 20, 'director sectorial.jpg'),
(19, 21, 'director sectorial.jpg'),
(20, 22, 'director sectorial.jpg'),
(21, 23, 'director sectorial.jpg'),
(22, 24, 'DSC_7082.JPG'),
(23, 25, 'DSC_7082.JPG'),
(24, 26, 'ssuper2.png'),
(25, 27, 'IMG_20190420_114714.jpg'),
(26, 28, 'Yellow Floral Raksha Bandhan Card.png'),
(27, 29, 'ssuper.png'),
(28, 30, '33.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `action` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id`, `name`, `action`) VALUES
(1, 'Home', 'index.php'),
(2, 'Contact Us', '#'),
(3, 'Categories', '#');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `category_id` int(11) NOT NULL,
  `description` varchar(100) NOT NULL,
  `writter` varchar(40) NOT NULL,
  `writter_quotes` text NOT NULL,
  `profile_image` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `content`, `created_at`, `category_id`, `description`, `writter`, `writter_quotes`, `profile_image`) VALUES
(7, ' cm cw cwc  c', ' wcj wj cjwec w cw ', '2022-07-31 08:52:50', 2, 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classi', '', '', ''),
(9, 'amw, xms x', '<p>Hello World cnanc n ns nsv bnavb nab vnsabv anbv manbvabvnbsvmbsmbamccccccccccccccccccccccccacbasmccccccccccccccccbmancmasncmasncmasncmasncmasncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc!</p>', '2022-08-10 14:36:47', 1, '', 'makk', 'banbxambxmaaxbnacbnabcnabcanbcnabcanbcanbcbnc', ''),
(10, 'amw, xms x', '<p>Hello World cnanc n ns nsv bnavb nab vnsabv anbv manbvabvnbsvmbsmbamccccccccccccccccccccccccacbasmccccccccccccccccbmancmasncmasncmasncmasncmasncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc!</p>', '2022-08-10 14:40:16', 1, 'snmzbvdmzvb zm vzxvzxm v zmv', 'makk', 'banbxambxmaaxbnacbnabcnabcanbcnabcanbcanbcbnc', ''),
(11, 'fdghjkljdjdf', '<p>Hello Worldac aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaas!</p>', '2022-08-11 13:38:01', 1, ', c,a cccccs,c a,c a, c,a c,a c,a c,a c,a ,ac', 'naveen', 'macksmmmmmmmmmmmmmmmmmmmmmmmm', 'profile.png'),
(14, 'mc                smsc s,,,,,,,,,,,,', '<p><img src=\"https://www.google.com/logos/google.jpg\" alt=\"My alt text\" width=\"354\" height=\"116\">Hello mC&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;m&gt;C, C,. C,.C .,</p>\r\n<p>zvmz.vm.zxxxxxxxxxxxxxxxxxVzDMsAMV&gt;MV&lt;MVSWorld!</p>', '2022-08-13 05:37:53', 1, 'msccccccccccccca c', 'naveen', 'z,vmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm', 'profile.png'),
(16, 'kknksanccccc', '<p>Hello Wksvnksaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaorld!</p>', '2022-08-13 06:01:44', 1, 'msavvvvvvvvvvvvvvvvvvvvvvvvvvv ', 'Naveen', 'VNSKDDDDDDDDDDDDDkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk', 'Screenshot 2022-08-04 104027.jpg'),
(17, ',mAWnnsflllllll', '<h2>Hello World!sm&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style=\"font-family: \'arial black\', sans-serif;\">mdcccccccccccnmdnv<span style=\"font-family: georgia, palatino, serif;\">sfm&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; snfmssmmmmmmqq,bc,</span></span>&nbsp;nmndddddddddddddddddddddddddbmmmmmmmm</h2>\r\n<h4>,mgfbbbbbbbbbbbbbbbbbbbbbbbbbbbln</h4>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<h1>dlmhhhf;drrrrrrrrrrrrrrr</h1>', '2022-08-13 10:47:08', 2, 'msssssssssssn mxmz', 'naveen', ';lsgmdk;;;;;;;;;;;;ryls;elt;se.f,cn..............\r\ndhmldrhmdlrhkdrhd;lhrmmn,fffff', 'profile.png'),
(24, 'ammaxca', '<p>Hello World!</p>', '2022-08-14 13:49:44', 3, 'masc mascsn c  scccccms cma mc', 'vmsd,vs,', 'as caksc a', '                               '),
(25, 'ammaxcasdnskdnkdnzfndz,nfs c,znksks', '<p>Hello World!</p>zf mznfmzncmzdnmzNmnmzxnMCNCMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM', '2022-08-14 13:51:54', 3, 'masc mascsn c  sccccx,v,xccms cma mc', 'vmsd,vs,', 'as caksc a,sg,nds', ' '),
(26, 'vivekkkkkkkkkk', '<p><strong>Hello World!fbscascjac js ja vjan&nbsp;</strong></p>', '2022-08-17 09:59:48', 1, 'nas bfjsabjsbjacb', 'naveen', 'ncknckznckzxcnxk', '                profile.png                '),
(28, 'ajhkjahFK.JSd', 'a c,c,c ,a<p>Hello World!asbdjasfHADiHiHSFHHSSIHSFHSIH</p>', '2022-08-17 13:43:28', 1, 'jagbjabfjafbajfba', 'naveen', 'kHFKSHFKAN', 'profile.png'),
(29, 'jsfsfskj', '<p>Hello World!sdjbgjsbnmdvnmnvmnvmdsnvmsvnms</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<p>vikram</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<p>naveen</p>', '2022-08-17 16:45:40', 3, 'sdvnskdvnksdv', 'naveen', 'zknckzcnkznc', 'profile.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` varchar(60) NOT NULL,
  `about` varchar(60) DEFAULT NULL,
  `phone_no` int(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `linkedin_profile` varchar(110) DEFAULT NULL,
  `password` varchar(200) NOT NULL,
  `image` varchar(2000) DEFAULT NULL,
  `country` varchar(200) NOT NULL,
  `address` varchar(100) NOT NULL,
  `job` varchar(50) NOT NULL,
  `user_cat` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `about`, `phone_no`, `email`, `linkedin_profile`, `password`, `image`, `country`, `address`, `job`, `user_cat`) VALUES
(5, 'naveen', 'roooot\r\n', 214783647, 'root@root', 'qdkandmandma1', 'root', '33.jpg', 'India', 'mwndmwndq', 'Web Designer', 'index'),
(6, 'SHANKAR NAGAR EXTN', '', 23333235, 'boyrockstar200@gmail.com', 'c,b ,b ,d b,d bd bd ,b1111111111', 'admin@123', '', 'India', 'lsamclma', 'clmaclm', 'user'),
(14, 'Naveen', 'ksnckscnsnc', 88989, 'root@roottttt', 'zm vmzc vmxzv x', 'root', 'Screenshot 2022-08-04 104027.jpg', 'wm msf', 'mvns mv smv', 'Web Designer', 'user'),
(15, 'x,z , ', 'z,c ,x', 1233441, '100@100', 'axsxsx', '1111', '', 'mcdzkcm', 'mzkmc', 'z cmdmkd', 'user'),
(16, 'x,z , ', 'z,c ,x', 1233441, '100@1002', 'axsxsx', '    ', '', 'mcdzkcm', 'mzkmc', 'z cmdmkd', 'user'),
(18, 'ass', ',zz,z,', 2147483647, 'ssss@gmail.caasco', 'saknkmsmsdmfascascasssang', 'root1', 'IMG_20190420_114910.jpg', 'indiaaa1111', 'vbvbvb', 'mzmxmzmzxmzmx', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
