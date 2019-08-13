--
-- PostgreSQL database dump
--

-- Dumped from database version 11.3
-- Dumped by pg_dump version 11.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: recipe_components; Type: TABLE DATA; Schema: public; Owner: marc.cordova
--

COPY public.recipe_components (id, name, unit_type, amount, cups_to_lbs) FROM stdin;
7	Soy Sauce	cups	1.232	\N
8	Sesame Oil	cups	0.616	\N
9	Corn Starch	oz	16	\N
10	Simple Stir Fry Sauce	cups	0.583	\N
\.


--
-- Data for Name: ingredients; Type: TABLE DATA; Schema: public; Owner: marc.cordova
--

COPY public.ingredients (id, recipe_component, unit_cost) FROM stdin;
3	7	5.49
4	8	5.99
5	9	1.99
\.


--
-- Data for Name: recipes; Type: TABLE DATA; Schema: public; Owner: marc.cordova
--

COPY public.recipes (id, recipe_component, category, directions) FROM stdin;
2	10	Side	1. Add all ingredients to a mason jar. Screw on the lid and shake to combine.\n2. Be sure to use this stir fry sauce with fresh minced garlic and fresh minced ginger in your stir fry (cooked with your vegetables/protein).\n3. Once your stir fry is mostly cooked, add sauce and heat an additional 3-5 minutes, or until sauce thickens. Serve immediately.
\.


--
-- Data for Name: recipe_ingredients; Type: TABLE DATA; Schema: public; Owner: marc.cordova
--

COPY public.recipe_ingredients (id, recipe, ingredient, amount, unit_type) FROM stdin;
\.


--
-- Data for Name: schema_migrations; Type: TABLE DATA; Schema: public; Owner: marc.cordova
--

COPY public.schema_migrations (version, dirty) FROM stdin;
20190714184625	f
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: marc.cordova
--

COPY public.users (id, username, password, superuser) FROM stdin;
1	test	$2y$08$EynTGorPKDcmCPs8zO.eVOAH/XHtv0k27nUjSF.v1XcmHKS1RoUdC	f
2	test1	$2y$08$g.FUpJues3SfHJpxvvxOw.FtkcR69Hw4QHOSIoMjAcXEoUPdHLgiy	f
\.


--
-- Name: ingredients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: marc.cordova
--

SELECT pg_catalog.setval('public.ingredients_id_seq', 5, true);


--
-- Name: recipe_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: marc.cordova
--

SELECT pg_catalog.setval('public.recipe_components_id_seq', 10, true);


--
-- Name: recipe_ingredients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: marc.cordova
--

SELECT pg_catalog.setval('public.recipe_ingredients_id_seq', 1, true);


--
-- Name: recipes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: marc.cordova
--

SELECT pg_catalog.setval('public.recipes_id_seq', 2, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: marc.cordova
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- PostgreSQL database dump complete
--

