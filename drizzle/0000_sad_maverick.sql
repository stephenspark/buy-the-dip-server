CREATE TABLE `user` (
	`id` integer PRIMARY KEY NOT NULL,
	`username` text NOT NULL,
	`password` text NOT NULL,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP' NOT NULL,
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP' NOT NULL
);
