import RequestVoteResponse from "./response/RequestVoteResponse";
import AppendEntriesResponse from "./response/AppendEntriesResponse";
import {State} from "./State";


export default class Node {
    /**
     * Latest term node has seen
     */
    private currentTerm: number;

    private votedFor: string|null;

    private log: string[] | undefined;

    private commitIndex: number;

    private lastApplied: number;

    private nextIndex: number[];

    private matchIndex: number;

    private state: State = State.follower;

    constructor() {
        this.currentTerm =0;
        this.votedFor = null;
        this.log = new Array<string>();
        this.commitIndex =0;
        this.lastApplied =0;
        this.nextIndex = new Array<number>();
        this.matchIndex = (new Array<number>()).push(0);

    }

    public appendEntries(term: number, leaderId: number, prevLogIndex: number, prevLogTerm: number, entries: string[], leaderCommit: number): AppendEntriesResponse {
        return {} as AppendEntriesResponse;
    }

    public requestVote(term: number, candidateId: string, lastLogIndex: number, lastLogTerm: number): RequestVoteResponse {
        return {
            term: this.currentTerm,
            voteGranted: (this.votedFor === null || this.votedFor === candidateId) && lastLogIndex >= this.commitIndex && lastLogTerm >= this.currentTerm
        }
    }
}