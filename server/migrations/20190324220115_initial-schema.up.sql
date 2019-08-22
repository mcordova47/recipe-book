CREATE TABLE recipe_components (
    id serial PRIMARY KEY,
    name text NOT NULL,
    unit_type text NOT NULL,
    amount numeric NOT NULL CHECK (amount > 0),
    cups_to_lbs numeric CHECK (cups_to_lbs > 0)
);

CREATE TABLE ingredients (
    id serial PRIMARY KEY,
    recipe_component integer NOT NULL REFERENCES recipe_components(id) UNIQUE,
    unit_cost numeric NOT NULL
);

CREATE TABLE recipes (
    id serial PRIMARY KEY,
    recipe_component integer NOT NULL REFERENCES recipe_components(id) UNIQUE,
    category text NOT NULL,
    directions text NOT NULL
);

CREATE TABLE recipe_ingredients (
    id serial PRIMARY KEY,
    recipe integer NOT NULL REFERENCES recipes(id),
    ingredient integer NOT NULL REFERENCES recipe_components(id),
    amount numeric NOT NULL CHECK (amount > 0),
    unit_type text NOT NULL,
    UNIQUE (recipe, ingredient)
);
