CREATE TABLE IF NOT EXISTS swim_sets (
    id SERIAL PRIMARY KEY,
    warmup TEXT,
    premain TEXT,
    mainset TEXT,
    cooldown TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
