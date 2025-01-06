export default class TournamentResponseDto {
    id: string;

    name: string;

    description: string;

    start_date: string;

    end_date: string;

    is_open: boolean;

    club: {
        id: string;
        name: string;
    };
}
