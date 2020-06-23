export default function getColorByType(type: string): string {
   let color;

   switch (type) {
      case 'Bug':
         color = '#72e072';
         break;

      case 'Dark':
         color = '#565656';
         break;

      case 'Dragon':
         color = '#47d1d1';
         break;

      case 'Electric':
         color = '#ffce4b';
         break;

      case 'Fairy':
         color = '#ff66a3';
         break;

      case 'Fighting':
         color = '#ffa366';
         break;

      case 'Fire':
         color = '#f7786b';
         break;

      case 'Flying':
         color = '#538cc6';
         break;

      case 'Ghost':
         color = '#7575a3';
         break;

      case 'Grass':
         color = '#48d0b0';
         break;

      case 'Ground':
         color = '#c68c53';
         break;

      case 'Ice':
         color = '#66e0ff';
         break;

      case 'Normal':
         color = '#d2a679';
         break;

      case 'Poison':
         color = '#7c538c';
         break;

      case 'Psychic':
         color = '#ff80b3';
         break;

      case 'Rock':
         color = '#b1736c';
         break;

      case 'Steel':
         color = '#85adad';
         break;

      case 'Water':
         color = '#58abf6';
         break;

      default:
         color = '#999';
   }

   return color;
}
