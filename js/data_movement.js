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
            "You leap into the air a number of feet equal to <b>3 + your Strength modifier</b> if you move at least 10 feet on foot immediately before the jump.",
            "When you make a standing high jump, you can jump only half that distance.",
            "You can extend your arms half your height above yourself during the jump.",
            "In some circumstances, your DM might allow you to make a Strength (Athletics) check to jump higher than you normally can."
        ]
    },
    {
        title: "Long jump",
        icon: "wingfoot",
        subtitle: "Cost: 5ft per 5ft",
        description: "Movement cost: 5ft per 5ft jumped",
        reference: "PHB, pg. 182.",
        bullets: [
            "You cover a number of feet up to your <b>Strength score</b> if you move at least 10 feet on foot immediately before the jump.",
            "When you make a standing long jump, you can leap only half that distance",
            "May involve a DC 10 Strength (Athletics) check to clear a low obstacle (no taller than a quarter of the jump's distance). You hit the obstacle on a failed check.",
            "May involve a DC 10 Dexterity (Acrobatics) check to land on your feet in difficult terrain. You land prone on a failed check."
        ]
    },
    {
        title: "Improvise",
        icon: "juggler",
        subtitle: "Any stunt not on this list",
        description: "Perform any movement or stunt you can imagine",
        bullets: [
            "When you describe a kind of movement not detailed elsewhere in the rules, the DM tells you whether it is possible and what kind of roll you need to make, if any, to determine success or failure."
        ]
    },
    {
        title: "Difficult terrain",
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
        title: "Grapple move",
        icon: "grab",
        subtitle: "Modifier: speed halved",
        description: "Drag or carry the grappled creature with you",
        reference: "PHB, pg. 195.",
        bullets: [
            "If you move while grappling another creature, your speed is halved, unless the creature is two or more sizes smaller than you.",
            "See the attack action for how to grapple a creature."
        ]
    }
]
