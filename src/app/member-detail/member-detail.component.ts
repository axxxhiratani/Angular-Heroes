import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../member';
import { MemberService } from '../member.service';


@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  member?: Member;
  constructor(
    private route: ActivatedRoute,
    private memberService: MemberService,
    // private location: Location
  ) { }

  ngOnInit(): void {
    this.getMeber();
  }

  getMeber(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.memberService.getMember(id)
      .subscribe(member => this.member = member);

  }
}
