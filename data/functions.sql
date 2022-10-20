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
$$;
