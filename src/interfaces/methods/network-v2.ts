import {ContractSendMethod} from 'web3-eth-contract';
import {ContractCallMethod} from '@methods/contract-call-method';
import {Bounty} from '@interfaces/bounty';
import { Oracle } from '@interfaces/oracle';
import { Delegation } from '@interfaces/delegation';

export interface Network_v2Methods {
  _governor(): ContractCallMethod<string>;
  _proposedGovernor(): ContractCallMethod<string>;
  bountiesIndex(): ContractCallMethod<number>;
  treasuryInfo(): ContractCallMethod<{'0': string, '1': number, '2': number}>;
  bountyNftUri(): ContractCallMethod<string>;
  canceledBounties(): ContractCallMethod<number>;
  cidBountyId(v1: string): ContractCallMethod<number>;
  claimGovernor(): ContractSendMethod;
  closedBounties(): ContractCallMethod<number>;
  councilAmount(): ContractCallMethod<number>;
  disputableTime(): ContractCallMethod<number>;
  draftTime(): ContractCallMethod<number>;
  mergeCreatorFeeShare(): ContractCallMethod<number>;
  nftToken(): ContractCallMethod<string>;
  oracleExchangeRate(): ContractCallMethod<number>;
  oracles(v1: string): ContractCallMethod<Oracle>;
  oraclesDistributed(): ContractCallMethod<number>;
  percentageNeededForDispute(): ContractCallMethod<number>;
  proposeGovernor(proposedGovernor: string): ContractSendMethod;
  proposerFeeShare(): ContractCallMethod<number>;
  settlerToken(): ContractCallMethod<string>;
  totalSettlerLocked(): ContractCallMethod<number>;
  getBounty(id: number): ContractCallMethod<Bounty>;
  disputes(address: string, bountyAndProposalIds: string): ContractCallMethod<number>;
  disputes(address: string, bountyId: string | number, proposalId: string | number): ContractCallMethod<number>;
  getDelegationsFor(_address: string): ContractCallMethod<Delegation[]>;
  getBountiesOfAddress(owner: string): ContractCallMethod<number[]>;
  changeNetworkParameter(_parameter: number, _value: number): ContractSendMethod;
  manageOracles(lock: boolean, amount: number): ContractSendMethod;
  delegateOracles(amount: number, toAddress: string): ContractSendMethod;
  takeBackOracles(entryId: number): ContractSendMethod;
  openBounty(tokenAmount: number, transactional: string, rewardToken: string, rewardAmount: number, fundingAmount: number, cid: string, title: string, repoPath: string, branch: string, githubUser: string): ContractSendMethod;
  cancelBounty(id: number): ContractSendMethod;
  cancelFundRequest(id: number): ContractSendMethod;
  updateBountyAmount(id: number, newTokenAmount: number): ContractSendMethod;
  fundBounty(id: number, fundingAmount: number): ContractSendMethod;
  retractFunds(id: number, fundingIds: number[]): ContractSendMethod;
  createPullRequest(forBountyId: number, originRepo: string, originBranch: string, originCID: string, userRepo: string, userBranch: string, cid: number): ContractSendMethod;
  cancelPullRequest(ofBounty: number, prId: number): ContractSendMethod;
  markPullRequestReadyForReview(bountyId: number, pullRequestId: number): ContractSendMethod;
  createBountyProposal(id: number, prId: number, recipients: string[], percentages: number[]): ContractSendMethod;
  disputeBountyProposal(bountyId: number, proposalId: number): ContractSendMethod;
  refuseBountyProposal(bountyId: number, proposalId: number): ContractSendMethod;
  closeBounty(id: number, proposalId: number): ContractSendMethod;
}