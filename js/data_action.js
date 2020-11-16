data_action = [
    {
        title: "공격/Attack",
        icon: "crossed-swords",
        subtitle: "근접 또는 장거리 공격",
        description: "근접 또는 장거리 공격을 합니다.",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
            "파이터의 <i>행동 연쇄</i> 요소 같은 몇몇 기능들을 이용하면, 당신은 공격 행동으로 여러 차례의 공격을 가할 수도 있습니다. 각각의 공격들은 각각의 명중 굴림을 사용하고 다른 생물을 목표로 지정할 수 있습니다. 당신은 공격 간에 움직일 수 있습니다.",
            "당신이 한 손에 드는 경량형 근접 무기를 사용하여 공격 행동을 취한 경우, 추가 행동을 사용하여 반대편 손에 쥐고 있는 다른 경량형 근접 무기로도 공격을 가할 수 있습니다. (see the <i>Offhand attack</i> bonus action).",
            "공격 횟수중 1회를 대신해 붙잡기 또는 밀어붙이기를 사용할 수 있습니다.",
            "몇몇 상태은 공격 굴림에 이점을 얻습니다: 장님 상태, 마비 상태, 석화 상태, 포박 상태, 충격 상태, 또는 무의식 상태의 크리쳐를 공격; 넘어진 크리쳐를 5ft내에서 근접 공격; 투명 상태 또는 은신 상태의 크리쳐의 공격.",
            "몇몇 상태은 공격 굴림에 불리점을 얻습니다: 투명 상태 또는 은신 상태의 크리쳐를 공격하려는 명중 굴림; 넘어진 상태의 크리쳐를 장거리 공격하려는 명중 굴림; 장님 상태, 공포 상태, 중독 상태, 포박 상태의 크리쳐의 명중 굴림."
        ]
    },
    {
        title: "붙잡기/Grapple",
        icon: "grab",
        subtitle: "특수 근접 공격",
        description: "크리쳐와 몸싸움을 하며 붙잡기를 시도합니다.",
        reference: "PHB, pg. 195.",
        bullets: [
            "당신이 어떤 크리쳐와 몸싸움을 하며 붙잡으려 한다면, 공격 행동을 사용할 때 특별한 형태의 근접 공격인 붙잡기를 시도할 수 있습니다. 공격 행동 한 번으로 여러 번 명중 굴림을 할 수 있다면, 그 횟수 중 1회를 대신해 붙잡기를 시도할 수도 있습니다.",
            "당신은 자기보다 한 단계 큰 목표까지 붙잡을 수 있으며, 간격 내에 있는 목표만 붙잡으려 시도할 수 있습니다.",
            "붙잡으려면 최소한 한 손이 자유로워야 하며, 이 손을 이용해 판정합니다. 이 판정은 당신의 근력(운동) 판정과 목표의 근력(운동) 또는 민첩(곡예)판정 사이의 대결로 이루어집니다. (목표는 자신이 사용하는 판정을 정할 수 있습니다.) ",
            " 대결에서 당신이 이겼다면 목표는 붙잡힌 상태(붙잡힌 상태 참조)가 됩니다. (이동속도가 0이 됩니다.)"
        ]
    },
    {
        title: "밀어붙이기/Shove",
        icon: "hand",
        subtitle: "특수 근접 공격",
        description: "크리쳐를 밀어붙여서 쓰러트리거나 멀리 밀어낼 수 있습니다.",
        reference: "PHB, pg. 195.",
        bullets: [
            "당신은 <i>공격</i> 행동을 사용해서 특별한 공격 행동인 밀어붙이기를 통해 상대를 쓰러트리거나 멀리 밀어낼 수 있습니다. 당신이 공격 행동으로 여러 번의 공격을 가할 수 있다면, 밀어붙이기는 그 공격 횟수 중 1회를 대신해 사용할 수 있습니다.",
            "당신은 자기보다 한 단계 큰 목표까지 밀 수 있으며, 간격 내에 있는 목표만 밀어내려 시도할 수 있습니다.",
            "이 시도는 당신의 근력(운동) 판정과 목표의 근력(운동) 또는 민첩(곡예) 판정 사이의 대결로 이루어집니다. (목표는 자신이 사용하는 판정을 정할 수 있습니다.)",
            "당신이 승리하면, 당신은 상대를 넘어트리거나 5ft 멀리 밀어낼 수있습니다."
        ]
    },
    {
        title: "주문 시전/Cast A Spell",
        icon: "magic-swirl",
        subtitle: "1 행동의 시전 시간",
        description: "행동을 사용하여 주문을 시전할 수 있습니다.",
        reference: "PHB, pg. 192.",
        bullets: [
            "추가 행동으로 주문을 시전할 경우, 시전 시간이 1 행동인 소마법들을 제외하면 해당 턴에 또 다른 주문을 시전할 수 없습니다.",
            "주문의 목표는 사거리 내에 있는 대상이어야 합니다. 어떤 대상을 목표로 삼으려면 먼저 그 대상에 대한 사선이 확보되어야 하며, 완전 엄폐 뒤에 숨으면 목표로 지정할 수 없습니다.",
            "<i>구성요소 주머니</i>나 <i>주문시전 매개체</i>를 사용하면, 주문에 필요한 대부분의 구성요소를 대신할 수 있습니다. 하지만 구성요소에 따로 비용이 명시되어 있는 경우, 캐릭터는 주문을 시전하기 전에 그 구성요소를 구매해서 갖추고 있어야 합니다.",
            "몇몇 주문들은 마법을 유지하기 위해 집중을 해야 합니다. 집중을 잃게 되면 주문은 종료됩니다.  당신이 집중을 요구하는 다른 주문을 시전하거나 행동불능 상태가 되거나 사망하게 되면 이전에 시전한 주문의 집중은 깨지게 됩니다. 당신이 주문에 집중하고 있을 때 피해를 입게 되면, 주문을 유지하기 위해 건강 내성 굴림을 굴려야 합니다. DC는 당신이 받은 피해의 절반이며, 그 결과가 10 미만이라면 최소 DC는 10입니다."
        ]
    },
    {
        title: "질주/Dash",
        icon: "sprint",
        subtitle: "추가 이동력",
        description: "이번 턴에 추가로 이동력을 얻게 됩니다.",
        reference: "PHB, pg. 192.",
        bullets: [
            "추가 이동력은 당신의 이동속도만큼 늘어나며, 만약 이동속도에 수정치를 받고 있다면 그 수정치도 영향을 줍니다."
        ]
    },
    {
        title: "퇴각/Disengage",
        icon: "journey",
        subtitle: "기회 공격을 유발하지 않습니다.",
        description: "당신이 퇴각 행동을 사용하면, 당신의 이동은 그 턴이 끝날 때까지 기회공격을 유발하지 않습니다.",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "회피/Dodge",
        icon: "aura",
        subtitle: "공격을 회피",
        description: "공격을 피하는 데 전념합니다.",
        reference: "PHB, pg. 192.",
        bullets: [
            "당신의 다음 턴이 시작될 때까지, 당신이 볼 수 있는 공격자가 가하는 모든 명중 굴림에는 불리점이 가해지며, 당신은 민첩 내성 굴림에 이점을 받을 수 있습니다.",
            "당신은 행동불능 상태가 되거나 이동속도가 0으로 떨어진 상태에서는 이 행동의 효과를 얻을 수 없습니다."
        ]
    },
    {
        title: "빠져나가기/Escape",
        icon: "manacles",
        subtitle: "붙잡힌 상태에서 빠져나가기",
        description: "붙잡힌 상태에서 빠져나가기.",
        reference: "PHB, pg. 195.",
        bullets: [
            "붙잡힌 크리쳐는 행동을 사용해 탈출 시도를 할 수 있습니다.",
            "탈출 시도를 하려면 근력(운동) 또는 민첩(곡예) 판정으로 당신의 근력(운동) 판정과 대결을 벌여 이겨야만 합니다."
        ]
    },
    {
        title: "원호/Help",
        icon: "telepathy",
        subtitle: "동료에게 이점을 줍니다.",
        description: "동료의 능력 판정이나 공격에 이점을 줍니다.",
        reference: "PHB, pg. 192.",
        bullets: [
            "당신이 원호 행동을 취하면, 당신이 도와주는 크리쳐는 도움을 받은 다음번 능력 판정에 이점을 받을 수 있습니다. ",
            "그게 아니면, 당신은 주변 5ft 내에서 다른 크리쳐를 공격하려는 우호적인 크리쳐에게 도움을 줄 수 있습니다.",
            "이 이점은 당신의 다음 턴이 시작되기 전까지만 지속됩니다."
        ]
    },
    {
        title: "물건 사용/Use Object",
        icon: "snatch",
        subtitle: "물건과 상호작용",
        description: "물건과 두 번째 간단한 상호작용을 합니다.",
        reference: "PHB, pg. 193.",
        bullets: [
            "일반적인 경우, 칼을 뽑는 것은 공격 행동의 일환으로 취급하는 등 행동을 사용하지 않아도 물체를 다루는 것은 가능합니다. 그러나 두 번째 물체를 조작하려는 경우, 이 행동을 사용해야 합니다.",
            "사용하기 위해 행동이 필요한 물건도 있으며, 그 경우 그 물건을 사용하기 위해서는 물건 사용 행동을 취해야 합니다."
        ]
    },
    {
        title: "방패 착용과 해제/Use Shield",
        icon: "round-shield",
        subtitle: "방패를 착용하거나 해제",
        description: "방패를 착용하거나 벗습니다.",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "방패를 착용하거나 해제하는데에는 1 행동이 필요합니다.",
            "갑옷을 착용하거나 해제하는데에는 몇 분이 걸립니다. 다른 사람의 도움으로 절반으로 줄일 수 있습니다."
        ]
    },
    {
        title: "은신/Hide",
        icon: "hood",
        subtitle: "은신을 시도합니다",
        description: "은신을 시도합니다",
        reference: "PHB, pg. 192.",
        bullets: [
            "당신은 당신을 분명히 볼 수 있는 크리쳐에게서는 숨을 수 없습니다. 당신은 
            You can't hide from a creature that can see you. You must have total cover, be in a heavily obscured area, be invisible, or otherwise block the enemy's vision.",
            "If you make noise (such as shouting a warning or knocking over a vase), you give away your position.",
            "When you try to hide, make a Dexterity (Stealth) check and note the result. Until you are discovered or you stop hiding, that check's total is contested by the Wisdom (Perception) check of any creature that actively searches for signs of your presence.",
            "A creature notices you even if it isn't searching unless your Stealth check is higher than its Passive Perception.",
            "Out of combat, you may also use a Dexterity (Stealth) check for acts like concealing yourself from enemies, slinking past guards, slipping away without being noticed, or sneaking up on someone without being seen or heard."
        ]
    },
    {
        title: "Search",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Devote your attention to finding something",
        reference: "PHB, pg. 193.",
        bullets: [
            "Depending on the nature of your search, the DM might have you make a Wisdom (Perception) check or an Intelligence (Investigation) check."
        ]
    },
    {
        title: "Ready",
        icon: "stopwatch",
        subtitle: "Choose trigger and action",
        description: "Choose a trigger and a response reaction",
        reference: "PHB, pg. 193.",
        bullets: [
            "First, you decide what perceivable circumstance will trigger your reaction.",
            "Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it.",
            "When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger.",
            "When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires concentration"
        ]
    },
    {
        title: "Use class feature",
        icon: "embrassed-energy",
        subtitle: "Some features use actions",
        description: "Use a racial or class feature that uses an action",
        reference: "See class page for more information.",
        bullets: [

        ]
    },
    {
        title: "Stabilize a creature",
        icon: "first-aid",
        subtitle: "Administer first aid to a dying creature",
        description: "Stop a dying creature from needing to make death saving throws",
        reference: "PHB, pg. 197.",
        bullets: [
            "Make a Wisdom (Medicine) check with DC 10",
            "On a success, the creature is stable and no longer needs to make death saving throws",
            "A stable creature regains 1 hit point after 1d4 hours"
        ]
    },
    {
        title: "Improvise",
        icon: "juggler",
        subtitle: "Any action not on this list",
        description: "Perform any action you can imagine",
        reference: "PHB, pg. 193.",
        bullets: [
            "When you describe an action not detailed elsewhere in the rules, the DM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure."
        ]
    }
]
