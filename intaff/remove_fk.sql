-- Remove the restrictive foreign key constraint
ALTER TABLE `birthday_wishes_log` DROP FOREIGN KEY `birthday_wishes_log_ibfk_1`;

-- (Optional but recommended) Ensure there is a regular index for performance since we query using both columns
-- CREATE INDEX `idx_alumni_table` ON `birthday_wishes_log` (`alumni_id`, `table_name`);
