DROP FUNCTION IF EXISTS "public"."search_food_log";
CREATE OR REPLACE FUNCTION "public"."search_food_log"(string text)
  RETURNS TABLE(title text, calories numeric, "desc" text) LANGUAGE sql AS $$
  select * from 
  (
  select distinct
    jsonb_array_elements(food_log->'entries')->>'title' as title, 
    (jsonb_array_elements(food_log->'entries')->'cps')::numeric as calories,
    jsonb_array_elements(food_log->'entries')->>'desc' as "desc"
  from days
  ) as days_query
  where title ilike '%' || string || '%'
  order by title
$$;


DROP FUNCTION IF EXISTS "public"."next_free_day";
CREATE OR REPLACE FUNCTION "public"."next_free_day"()
  RETURNS text LANGUAGE sql AS $$
  select substring(cast((max(date) + INTERVAL '1 days') as text),1,10) as next_free_day from days
$$;

