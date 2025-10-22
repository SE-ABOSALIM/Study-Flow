import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('subjects', 'routes/subjects.tsx'),
    route('notes', 'routes/notes.tsx'),
    route('timer', 'routes/timer.tsx'),
    route('settings', 'routes/settings.tsx'),
] satisfies RouteConfig;
