import {existsSync} from 'fs';
import {join} from 'path';
import {Database} from 'bun:sqlite';
import createSQLiteTags from 'better-tags';

// use mounted point on production, use local folder otherwise
const litefs = join(
  process.env.NODE_ENV === 'production' ? '/var/lib' : '.',
  'litefs'
);

// if litefs folder doesn't exist get out!
if (!existsSync(litefs)) {
  console.error('Unable to reach', litefs);
  process.exit(1);
}

// shared db + template literals  based utilities
const {db, get, all, values, exec, run, entries, transaction} =
        createSQLiteTags(new Database(join(litefs, 'db')));

export {db, get, all, values, exec, run, entries, transaction};

///////////////////////////////////////////////////////////////
// FOR DEMO SAKE ONLY - EXECUTED ON EACH DEPLOY / REVIVAL
///////////////////////////////////////////////////////////////

// some table schema
exec`
  CREATE TABLE IF NOT EXISTS persons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    company TEXT NOT NULL
  )
`;

// some table entry
exec`
  INSERT INTO persons
    (name, phone, company)
  VALUES
    (${
      crypto.randomUUID()
    }, ${
      ('+' + (Date.now() * Math.random())).replace(/[^+\d]/, ' ')
    }, 'fly.io')
`;
