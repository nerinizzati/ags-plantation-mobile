CREATE TABLE IF NOT EXISTS worker(
    worker_id TEXT PRIMARY KEY NOT NULL,
    worker_name TEXT NOT NULL,
    worker_location	TEXT NOT NULL, 
    cost_id	INTEGER NOT NULL, 
    role TEXT NOT NULL);

INSERT or IGNORE INTO worker VALUES ('D4622','A Zainudin','Division 1',500300,'Daily Worker');
INSERT or IGNORE INTO worker VALUES ('D4847','Aan Susanti','Division 1',500300,'Daily Worker');
INSERT or IGNORE INTO worker VALUES ('D4901','Aan Andy Tristanto','Division 1',500300,'Daily Worker');
INSERT or IGNORE INTO worker VALUES ('D4928','A Nurveni Rahayu Ningsih','Division 1',500300,'Daily Worker');
INSERT or IGNORE INTO worker VALUES ('D5180','Abdul Kadir','Division 4',500300,'Daily Worker');
INSERT or IGNORE INTO worker VALUES ('K5034','Abdullah Said','Division 4',500400,'Employee');
INSERT or IGNORE INTO worker VALUES ('K5183','Abdurohman','Division 4',500400,'Supervisor');

CREATE TABLE IF NOT EXISTS mobile_user(
	user_id	TEXT PRIMARY KEY NOT NULL,
	password TEXT NOT NULL
);

INSERT or IGNORE INTO mobile_user VALUES ('K5034','abdul123');
INSERT or IGNORE INTO mobile_user VALUES ('K5183','rohman123');

CREATE TABLE IF NOT EXISTS material (
	item_id	TEXT PRIMARY KEY NOT NULL,
	item_name	TEXT NOT NULL,
	item_type	TEXT NOT NULL,
	item_group	TEXT NOT NULL,
	cost_id	INTEGER NOT NULL
);

INSERT or IGNORE INTO material VALUES ('026.000.00000021','Pupuk A','Item','Pupuk',600600);
INSERT or IGNORE INTO material VALUES ('026.000.00000022','Zat Kimia A','Item','Kimia',600600);
INSERT or IGNORE INTO material VALUES ('026.000.00000023','Pupuk B','Item','Pupuk',600600);
INSERT or IGNORE INTO material VALUES ('026.000.00000024','Bearing 6025ZZ','Item','Spare Part',600700);
INSERT or IGNORE INTO material VALUES ('028.000.00000087','Jasa Kegiatan Pre-Emergency','Services','Jasa',600400);

CREATE TABLE IF NOT EXISTS cost (
	cost_id	INTEGER PRIMARY KEY NOT NULL,
	cost_name	TEXT NOT NULL,
	cost_type	TEXT NOT NULL
);

INSERT or IGNORE INTO cost VALUES (500300,'Manhour Daily Worker','Hour');
INSERT or IGNORE INTO cost VALUES (500400,'Manhour Employee','Hour');
INSERT or IGNORE INTO cost VALUES (500500,'Alat Berat','Hour');
INSERT or IGNORE INTO cost VALUES (500600,'Alat Sedang','Hour');
INSERT or IGNORE INTO cost VALUES (600200,'Land Clearing','Expense');
INSERT or IGNORE INTO cost VALUES (600300,'Plant Cane','Expense');
INSERT or IGNORE INTO cost VALUES (600400,'Ratoon Cane','Expense');
INSERT or IGNORE INTO cost VALUES (600500,'Land Maintenance','Expense');
INSERT or IGNORE INTO cost VALUES (600600,'Material','Item');
INSERT or IGNORE INTO cost VALUES (600700,'Spare Part','Item');
INSERT or IGNORE INTO cost VALUES (600800,'Vendor Land Clearing','Item');

CREATE TABLE IF NOT EXISTS asset (
	asset_id	TEXT PRIMARY KEY NOT NULL,
	asset_name	TEXT NOT NULL,
	asset_group	TEXT NOT NULL,
	cost_id	INTEGER NOT NULL
);

INSERT or IGNORE INTO asset VALUES ('BD.16.01.02','Bulldozer Komatsu (BD.16.01.02)','BL',500600);
INSERT or IGNORE INTO asset VALUES ('BD.91.02.01','Bulldozer Catterpilar D 6 D (BD.91.02.01)','BL',500600);
INSERT or IGNORE INTO asset VALUES ('BD.93.01.01','Bulldozer Komatsu D 65 E (BD.93.01.01)','BL',500600);
INSERT or IGNORE INTO asset VALUES ('TR-0000001','Traktor 2WD','TR',500300);
INSERT or IGNORE INTO asset VALUES ('TR-0000002','Traktor 4WD','TR',500300);

CREATE TABLE IF NOT EXISTS areal_statement (
	block_id	TEXT PRIMARY KEY NOT NULL,
	block_name	TEXT NOT NULL,
	land_area	REAL NOT NULL,
	land_area_unit	TEXT NOT NULL,
	plant_varieties	TEXT NOT NULL,
	plant_categories	TEXT NOT NULL,
	plant_quantity	INTEGER NOT NULL,
	planting_date	NUMERIC NOT NULL,
	latitude	TEXT NOT NULL,
	longitude	TEXT NOT NULL
);

INSERT or IGNORE INTO areal_statement VALUES ('010101001','60 BU 34',15.4,'Ha','SW001','TM',2660,'2000-11-08','-4.712336','105.264371');
INSERT or IGNORE INTO areal_statement VALUES ('010101002','61 BU 36',21.0,'Ha','SW002','TBM',3654,'2017-12-10','-4.711951','105.267975');
INSERT or IGNORE INTO areal_statement VALUES ('010101003','62 BU 38',12.6,'Ha','SW001','TBM',2180,'2018-01-05','-4.708401','105.267589');
INSERT or IGNORE INTO areal_statement VALUES ('010101004','63 BU 42',10.3,'Ha','SW001','TM',1782,'2008-11-14','-4.708615','105.271752');
INSERT or IGNORE INTO areal_statement VALUES ('010101005','64 BU 40',6.8,'Ha','SW002','TM',1178,'2009-11-20','-4.714560','105.275357');

CREATE TABLE IF NOT EXISTS activity_record (
	record_id	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	activity_id	TEXT NOT NULL,
	block_id	TEXT NOT NULL,
	area	REAL NOT NULL,
	worker_id	TEXT NOT NULL,
	man_hour	REAL NOT NULL,
	asset_id	TEXT NOT NULL,
	machine_hour	REAL NOT NULL,
	item_id	TEXT NOT NULL,
	quantity	INTEGER NOT NULL,
	created_at	NUMERIC NOT NULL,
	status	TEXT NOT NULL DEFAULT "Pending"
);

INSERT or IGNORE INTO activity_record VALUES (3,'GMP-0000054','010101001',1.0,'K5183',2.0,'TR-0000001',1.0,'026.000.00000023',15,'2020-02-25 15:01:09','Approved');
INSERT or IGNORE INTO activity_record VALUES (4,'GMP-0000001','010101002',2.0,'K5034',2.0,'TR-0000002',1.0,'026.000.00000022',10,'2020-02-25 15:05:06','Approved');
INSERT or IGNORE INTO activity_record VALUES (5,'GMP-0000057','010101002',1.0,'D4928',3.0,'BD.93.01.01',2.0,'026.000.00000024',3,'2020-03-12 00:00:18','Approved');
INSERT or IGNORE INTO activity_record VALUES (6,'GMP-0000002','010101001',2.25,'D4901',5.0,'TR-0000001',1.0,'026.000.00000023',12,'2020-04-12 00:01:16','Pending');
INSERT or IGNORE INTO activity_record VALUES (7,'GMP-0000001','010101002',1.5,'D4847',4.0,'TR-0000001',1.0,'026.000.00000024',3,'2020-04-12 00:52:01','Pending');
INSERT or IGNORE INTO activity_record VALUES (8, 'GMP-0000003', '010101003', 1, 'K5183', 4, 'TR-0000001', 2, '026.000.00000023', 15, '2020-06-12 01:10:03', 'Pending');
INSERT or IGNORE INTO activity_record VALUES (9, 'GMP-0000055', '010101002', 4, 'D4847', 4, 'TR-0000001', 1, '026.000.00000023', 10, '2020-06-12 02:44:56', 'Pending');
INSERT or IGNORE INTO activity_record VALUES (10, 'GMP-0000002', '010101003', 3, 'D4847', 3, 'BD.91.02.01', 1, '026.000.00000023', 10, '2020-06-18 17:50:10', 'Pending');
INSERT or IGNORE INTO activity_record VALUES (11, 'GMP-0000002', '010101001', 5, 'D4847', 3, 'TR-0000001', 1, '026.000.00000024', 3, '2020-07-25 18:59:02', 'Pending');
INSERT or IGNORE INTO activity_record VALUES (12, 'GMP-0000057', '010101003', 3, 'D4847', 2, 'TR-0000001', 1, '026.000.00000024', 3, '2020-07-25 23:33:31', 'Pending');


CREATE TABLE IF NOT EXISTS activity (
	activity_id	TEXT PRIMARY KEY NOT NULL,
	activity_name	TEXT NOT NULL,
	plant_categories	TEXT NOT NULL
);

INSERT or IGNORE INTO activity VALUES ('GMP-0000001','Land Clearing-Felling','TBM');
INSERT or IGNORE INTO activity VALUES ('GMP-0000002','Land Clearing-Stacking','TBM');
INSERT or IGNORE INTO activity VALUES ('GMP-0000003','Land Clearing-Restacking','TBM');
INSERT or IGNORE INTO activity VALUES ('GMP-0000004','Land Clearing-Blocking','TBM');
INSERT or IGNORE INTO activity VALUES ('GMP-0000005','Land Clearing-Levelling','TBM');
INSERT or IGNORE INTO activity VALUES ('GMP-0000054','Weeding ','TM');
INSERT or IGNORE INTO activity VALUES ('GMP-0000055','Irrigation','TM');
INSERT or IGNORE INTO activity VALUES ('GMP-0000056','Pre-Emergece I','TM');
INSERT or IGNORE INTO activity VALUES ('GMP-0000057','Harvest FFB','TM');
INSERT or IGNORE INTO activity VALUES ('GMP-0000058','Harvest Sand FFB','TM');