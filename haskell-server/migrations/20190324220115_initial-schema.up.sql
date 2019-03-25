CREATE TABLE recipe_components (
    id serial PRIMARY KEY UNIQUE,
    name text NOT NULL UNIQUE,
    unit_type text NOT NULL,
    amount numeric NOT NULL CHECK (amount > 0),
    cups_to_lbs numeric CHECK (cups_to_lbs > 0)
);

CREATE TABLE ingredients (
    unit_cost money NOT NULL,
    UNIQUE (id)
) INHERITS (recipe_components);

CREATE TABLE recipes (
    category text NOT NULL,
    directions text NOT NULL,
    UNIQUE (id)
) INHERITS (recipe_components);

CREATE TABLE recipe_ingredients (
    id serial PRIMARY KEY,
    recipe integer NOT NULL REFERENCES recipes(id),
    ingredient integer NOT NULL REFERENCES recipe_components(id),
    amount numeric NOT NULL CHECK (amount > 0),
    unit_type text NOT NULL,
    UNIQUE (recipe, ingredient)
);
