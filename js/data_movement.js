data_movement = [
    {
        title: "이동/Move",
        icon: "run",
        subtitle: "비용: 5ft 당 5ft",
        description: "5ft를 이동하는데 5ft의 이동력이 소모됩니다.",
        reference: "PHB, pg. 190.",
        bullets: [
            "만약 당신이 보행 이동속도와 비행 이동속도 등 여러 종류의 이동속도를 지니고 있다면, 이동하는 도중 이러한 이동속도들을 바꾸어서 사용할 수 있습니다.",
            "당신은 적대적이지 않은 크리쳐가 점유한 공간을 어려운 지형으로 취급하여 통과해 지나칠 수 있습니다.",
            "적대적인 크리쳐가 점유한 공간을 지나치려 하는 경우, 그 크리쳐가 당신보다 두 단계 이상 크거나 작은 경우에만 해당 공간을 통과할 수 있습니다.",
            "어느 쪽이든 다른 크리쳐가 점유한 공간은 어려운 지형으로 취급한다는 점을 잊지 마십시오.",
            "그 크리쳐가 적이든 친구이든, 당신은 다른 크리쳐가 점유한 공간에서 행동을 종료할 수 없습니다."
            
        ]
    },
    {
        title: "등반/Climb",
        icon: "crags",
        subtitle: "비용: 5ft 당 10ft",
        description: "5ft를 등반하는데 10ft의 이동력이 소모됩니다.",
        reference: "PHB, pg. 182.",
        bullets: [
            "DM은 선택 규칙으로, 미끄러운 수직 표면을 기어오르거나 손을 잡을 곳이 거의 없는 곳을 등반하려 할 때는 근력(운동) 판정이 필요하다고 선언할 수 있습니다.",
            "어려운 지형에서 등반을 하려면 추가로 2ft의 이동력을 소모합니다."
        ]
    },
    {
        title: "Swim",
        icon: "at-sea",
        subtitle: "Cost: 10ft per 5ft",
        description: "Movement cost: 10ft per 5ft swum",
        reference: "PHB, pg. 182.",
        bullets: [
            "거친 물살을 가르고 수영해야 할 경우 역시 근력(운동) 판정이 필요할 수 있습니다.",
            "어려운 지형에서 수영을 하려면 추가로 2ft의 이동력을 소모합니다."
        ]
    },
    {
        title: "넘어진 상태/Drop prone",
        icon: "falling",
        subtitle: "Cost: 0ft",
        description: "Movement cost: 0ft (free)",
        reference: "PHB, pgs. 190-191,292.",
        bullets: [
            "당신은 행동력을 전혀 소비하지 않고도 엎드리기를 할 수 있습니다.",
            "넘어진 상태에서 이동하려면, 당신은 포복하거나 순간이동 같은 마법적 수단을 이용해야 합니다.",
            "넘어진 상태는 <i>넘어짐 상태</i>를 추가합니다."
        ]
    },
    {
        title: "포복/Crawl",
        icon: "crawl",
        subtitle: "Cost: 10ft per 5ft",
        description: "Movement cost: 10ft per 5ft crawled",
        reference: "PHB, pg. 182.",
        bullets: [
            "넘어진 상태에서 이동하려면, 당신은 포복하거나 순간이동 같은 마법적 수단을 이용해야 합니다.",
            "어려운 지형에서 포복을 하려면 추가로 2ft의 이동력을 소모합니다."
        ]
    },
    {
        title: "일어서기/Stand up",
        icon: "strong",
        subtitle: "Cost: half movement speed",
        description: "Movement cost: half of your speed",
        reference: "PHB, pg. 190-191.",
        bullets: [
            "일어서기는 더 큰 노력이 필요하며, 일어서려면 당신의 이동속도 절반을 소비해야 합니다.",
            "만약 당신에게 충분한 이동력이 남아있지 않거나 이동속도가 0이라면, 당신은 일어설 수 없습니다."
        ]
    },
    {
        title: "높이뛰기/High jump",
        icon: "wingfoot",
        subtitle: "Cost: 5ft per 5ft",
        description: "Movement cost: 5ft per 5ft jumped",
        
        reference: "PHB, pg. 182.",
        bullets: [
            "당신은 최소 10ft의 도움닫기를 했다는 가정하에 <b>3 + 당신의 근력 수정치 ft</b> 만큼의 높이까지 뛰어오를 수 있습니다.",
            "만약 당신이 제자리에서 높이뛰기를 한 경우, 이 높이의 절반까지만을 뛰어오를 수 있습니다.",
            "당신은 높이 뛰기를 할 때, 팔을 위로 뻗어 키의 절반 높이까지를 더 손댈 수 있습니다. 따라서 당신이 위로 닿을 수 있는 최대 높이는 당신이 높이뛰기를 한 높이 + 당신 키 ˟ 1.5까지가 됩니다.",
            " 몇몇 특정한 상황에서는 DM이 근력(운동) 판정에 성공한 경우 평소보다 높이 뛰어오를 수 있다고 판단할 수도 있습니다."
        ]
    },
    {
        title: "멀리뛰기/Long jump",
        icon: "wingfoot",
        subtitle: "Cost: 5ft per 5ft",
        description: "Movement cost: 5ft per 5ft jumped",
        reference: "PHB, pg. 182.",
        bullets: [
            "먼 거리를 뛰어넘으려 할 때, 당신은 최소 10ft의 도움닫기를 했다는 가정하에 근력 점수 1점당 1ft를 뛰어넘을 수 있습니다.",
            "제자리에 서서 멀리 뛰려 하는 경우, 오직 근력 점수의 절반만큼만 뛰어넘을 수 있습니다. ",
            "DM은 선택 규칙으로 DC 10의 근력(운동) 판정에 성공해야 낮은 벽이나 울타리 등의 장애물을 뛰어넘을 수 있다고 선언할 수 있습니다. 이 판정에 실패한 경우 장애물에 충돌해 떨어진 것이 됩니다.",
            "당신이 어려운 지형에 착지한다면, 먼저 DC 10의 민첩(곡예)판정에 성공해야 제대로 착지할 수 있습니다. 이 판정에 실패한 경우 당신은 도착 지점에 넘어지게 됩니다."
        ]
    },
    {
        title: "임기응변/Improvise",
        icon: "juggler",
        subtitle: "Any stunt not on this list",
        description: "Perform any movement or stunt you can imagine",
        bullets: [
            "당신이 아래 설명된 규칙들에 해당하지 않는 이동을 하려 하는 경우, DM은 그 이동이 가능한지 아닌지와 그 이동을 위해서 판정이 필요하다면 어떤 판정을 해야 하는지 말해 줄 것입니다."
        ]
    },
    {
        title: "어려운 지형/Difficult terrain",
        icon: "stone-pile",
        subtitle: "Cost modifier: +5ft per 5ft",
        reference: "PHB, pg. 182.",
        description: "Moving in difficult terrain costs an additional 5ft per 5ft of movement",
        bullets: [
            "당신이 어려운 지형을 이동할 때는 1ft 이동할 때마다 추가로 1ft씩의 이동력을 더 소모합니다.",
            "이 규칙은 어려운 지형이 될 수 있는 요소가 여러 가지 동시에 존재한다고 해도 마찬가지입니다.",
            "낮은 가구나 파편, 수풀, 급격한 계단, 눈, 그리고 낮은 늪지 등이 대표적인 어려운 지형입니다.",
            "적대적이든 아니든 다른 크리쳐가 점유하고 있는 공간 역시 어려운 지형으로 취급합니다."
            
        ]
    },
    {
        title: "붙잡힌 크리쳐 움직이기/Grapple move",
        icon: "grab",
        subtitle: "Modifier: speed halved",
        description: "당신이 움직이게 되면, 당신은 붙잡고 있는 크리쳐를 같이 움직일 수 있습니다. ",
        reference: "PHB, pg. 195.",
        bullets: [
            " 이 경우 당신의 이동력은 절반이 됩니다. 붙잡은 크리쳐가 당신보다 두 단계 이상 작은 경우에는 이동력이 줄어들지 않습니다.",
            "크리쳐를 붙잡는 방법은 공격 행동의 붙잡기를 참조하십시오."
        ]
    }
]
