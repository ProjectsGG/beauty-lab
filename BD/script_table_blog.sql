ALTER TABLE blog ADD COLUMN ( reportado VARCHAR(1));

CREATE TABLE `blog_user_block` (
  `user_id` int(11) NOT NULL,
  `user_blocked_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`user_blocked_id`)
) 