import { Turkey } from "./Turkey";

class WildTurkey implements Turkey {
    gooble(): void {
        console.log('wildturkey gobble gobble');
    }
    fly(): void {
        console.log('wildturkey FLYING');
    }
}