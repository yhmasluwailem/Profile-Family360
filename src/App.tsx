import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Group,
  Paper,
  Progress,
  RingProgress,
  ScrollArea,
  Stack,
  Table,
  Tabs,
  Text,
  ThemeIcon,
  Timeline,
  Title,
  Alert,
  SimpleGrid,
  Indicator,
  Center,
} from '@mantine/core'
import {
  IconCalendarEvent,
  IconMessageCircle,
  IconWallet,
  IconTrophy,
  IconUser,
  IconBuildingBank,
  IconTree,
  IconChartBar,
  IconEdit,
  IconMail,
  IconFileExport,
  IconArchive,
  IconArrowRight,
  IconSettings,
  IconInfoCircle,
  IconHome,
  IconBriefcase,
  IconSchool,
} from '@tabler/icons-react'
import { BarChart } from '@mantine/charts'

const attendanceData = [
  { month: 'يناير', حضور: 1 },
  { month: 'فبراير', حضور: 0 },
  { month: 'مارس', حضور: 2 },
  { month: 'أبريل', حضور: 1 },
  { month: 'مايو', حضور: 0 },
  { month: 'يونيو', حضور: 2 },
  { month: 'يوليو', حضور: 2 },
  { month: 'أغسطس', حضور: 1 },
  { month: 'سبتمبر', حضور: 0 },
  { month: 'أكتوبر', حضور: 1 },
  { month: 'نوفمبر', حضور: 2 },
  { month: 'ديسمبر', حضور: 0 },
]

export default function App() {
  return (
    <Box bg="gray.0" mih="100vh" p="md" dir="rtl">
      {/* Topbar */}
      <Paper withBorder shadow="xs" p="sm" mb="md" radius="md">
        <Group justify="space-between">
          <Group gap="xs">
            <ThemeIcon size="lg" radius="md" variant="filled" color="dark">
              <Text fw={800} size="sm">ك</Text>
            </ThemeIcon>
            <Text fw={700} size="md">كفاح</Text>
            <Text c="dimmed" size="sm">/ الأعضاء / عبدالرحمن السويلم</Text>
          </Group>
          <Group gap="xs">
            <Button variant="default" size="xs" leftSection={<IconArrowRight size={14} />}>رجوع</Button>
            <Button variant="subtle" size="xs" px="xs"><IconSettings size={16} /></Button>
          </Group>
        </Group>
      </Paper>

      {/* Main Card */}
      <Card withBorder shadow="sm" radius="lg" p={0} style={{ overflow: 'hidden' }}>

        {/* Hero Header */}
        <Box
          bg="dark.8"
          p="xl"
          style={{
            background: 'linear-gradient(135deg, var(--mantine-color-dark-8) 0%, var(--mantine-color-dark-6) 100%)',
          }}
        >
          <Group align="flex-start" wrap="nowrap" mb="lg">
            <Indicator
              color="teal"
              size={14}
              offset={6}
              position="bottom-start"
              withBorder
              styles={{ indicator: { borderColor: 'var(--mantine-color-dark-8)' } }}
            >
              <Avatar
                size={80}
                radius="xl"
                variant="gradient"
                gradient={{ from: 'blue', to: 'violet' }}
                style={{ border: '3px solid rgba(255,255,255,0.15)' }}
              >
                <Text fw={700} size="xl" c="white">عخ</Text>
              </Avatar>
            </Indicator>

            <Box flex={1}>
              <Title order={3} c="white" mb={4}>عبدالرحمن خالد السويلم</Title>
              <Group gap="sm" mb="sm" c="gray.4">
                <Text size="sm">👤 KF-2847</Text>
                <Text size="sm">·</Text>
                <Text size="sm">📍 الرياض</Text>
                <Text size="sm">·</Text>
                <Text size="sm">🎂 1985/03/14</Text>
              </Group>
              <Group gap="xs">
                <Badge variant="light" color="gray" size="sm">🌿 عضو فاعل</Badge>
                <Badge variant="light" color="gray" size="sm">⭐ مجلس الأسرة</Badge>
                <Badge variant="light" color="gray" size="sm">🏆 الجيل الثالث</Badge>
              </Group>
            </Box>
          </Group>

          {/* Stats */}
          <SimpleGrid cols={4} spacing={0} style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 16 }}>
            {[
              { value: '12', label: 'فعالية شارك', color: 'blue.4' },
              { value: '7', label: 'استشارة قدّم', color: 'teal.4' },
              { value: '4,200', label: 'ريال رصيد', color: 'orange.4' },
              { value: '92%', label: 'نسبة الحضور', color: 'white' },
            ].map((s, i) => (
              <Box key={i} ta="center" style={{ borderLeft: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }} py="xs">
                <Text fw={700} size="xl" c={s.color} lh={1} mb={4}>{s.value}</Text>
                <Text size="xs" c="gray.5">{s.label}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Tabs */}
        <Tabs defaultValue="overview" keepMounted={false}>
          <Tabs.List px="md" style={{ borderBottom: '1px solid var(--mantine-color-gray-2)' }}>
            <Tabs.Tab value="overview" leftSection={<IconChartBar size={14} />}>نظرة عامة</Tabs.Tab>
            <Tabs.Tab value="events" leftSection={<IconCalendarEvent size={14} />} rightSection={<Badge size="xs" variant="light" color="blue" circle>12</Badge>}>الفعاليات</Tabs.Tab>
            <Tabs.Tab value="consulting" leftSection={<IconMessageCircle size={14} />} rightSection={<Badge size="xs" variant="light" color="teal" circle>7</Badge>}>الاستشارات</Tabs.Tab>
            <Tabs.Tab value="finance" leftSection={<IconWallet size={14} />}>المحفظة</Tabs.Tab>
            <Tabs.Tab value="family" leftSection={<IconTree size={14} />}>الشجرة</Tabs.Tab>
          </Tabs.List>

          {/* ── Overview ── */}
          <Tabs.Panel value="overview" p="md">
            <Alert icon={<IconInfoCircle size={16} />} color="blue" mb="md" variant="light">
              <Text fw={600} size="sm">ملف مكتمل بنسبة 87%</Text>
              <Text size="xs">يرجى إضافة صورة شخصية ورقم الهاتف للوصول إلى المستوى الذهبي.</Text>
            </Alert>

            <SimpleGrid cols={4} spacing="sm" mb="md">
              {[
                { icon: <IconCalendarEvent size={18} />, value: '12', label: 'فعالية حضرها', trend: '▲ 3 هذا العام', color: 'blue' },
                { icon: <IconMessageCircle size={18} />, value: '7', label: 'استشارة مقدّمة', trend: '▲ 2 هذا الشهر', color: 'teal' },
                { icon: <IconWallet size={18} />, value: '4,200', label: 'ريال رصيد', trend: '▲ 600 هذا الشهر', color: 'orange' },
                { icon: <IconTrophy size={18} />, value: '840', label: 'نقطة ولاء', trend: '▼ 60 آخر شهر', color: 'violet' },
              ].map((m, i) => (
                <Paper key={i} withBorder p="md" radius="md">
                  <ThemeIcon size="lg" radius="md" variant="light" color={m.color} mb="sm">{m.icon}</ThemeIcon>
                  <Text fw={700} size="xl" lh={1} mb={4}>{m.value}</Text>
                  <Text size="xs" c="dimmed" mb={6}>{m.label}</Text>
                  <Text size="xs" fw={600} c={m.trend.startsWith('▲') ? 'teal' : 'red'}>{m.trend}</Text>
                </Paper>
              ))}
            </SimpleGrid>

            <Grid>
              <Grid.Col span={6}>
                <Paper withBorder p="md" radius="md" h="100%">
                  <Group justify="space-between" mb="md">
                    <Text fw={600} size="sm">معلومات شخصية</Text>
                    <Button variant="subtle" size="xs" leftSection={<IconEdit size={12} />}>تعديل</Button>
                  </Group>
                  <SimpleGrid cols={2} spacing="sm">
                    {[
                      { k: 'الاسم الكامل', v: 'عبدالرحمن خالد السويلم' },
                      { k: 'رقم الهوية', v: '1084xxxxxxx' },
                      { k: 'الجوال', v: '+966 5xx xxx xxx' },
                      { k: 'الإيميل', v: 'a.suwailem@email.com' },
                      { k: 'المهنة', v: 'مهندس برمجيات' },
                      { k: 'تاريخ الانضمام', v: '2019/06/01' },
                    ].map((item) => (
                      <Box key={item.k}>
                        <Text size="xs" c="dimmed" mb={2}>{item.k}</Text>
                        <Text size="sm" fw={500}>{item.v}</Text>
                      </Box>
                    ))}
                  </SimpleGrid>
                </Paper>
              </Grid.Col>

              <Grid.Col span={6}>
                <Paper withBorder p="md" radius="md" h="100%">
                  <Text fw={600} size="sm" mb="md">مستوى المشاركة</Text>
                  <Group gap="md" mb="md">
                    <RingProgress
                      size={80}
                      thickness={8}
                      roundCaps
                      sections={[{ value: 72, color: 'blue' }]}
                      label={<Center><Text size="xs" fw={700}>72%</Text></Center>}
                    />
                    <Stack gap={4} flex={1}>
                      {[
                        { label: 'فعاليات', value: 85, color: 'blue' },
                        { label: 'استشارات', value: 70, color: 'teal' },
                        { label: 'مالي', value: 60, color: 'orange' },
                      ].map(r => (
                        <Group key={r.label} justify="space-between">
                          <Text size="xs">{r.label}</Text>
                          <Text size="xs" fw={700}>{r.value}%</Text>
                        </Group>
                      ))}
                    </Stack>
                  </Group>
                  <Divider mb="sm" />
                  {[
                    { label: 'الهدف السنوي', value: 72, max: 100, color: 'blue' },
                    { label: 'اشتراكات مدفوعة', value: 91, max: 100, color: 'teal' },
                  ].map(p => (
                    <Box key={p.label} mb="xs">
                      <Group justify="space-between" mb={4}>
                        <Text size="xs">{p.label}</Text>
                        <Text size="xs" fw={700}>{p.value}%</Text>
                      </Group>
                      <Progress value={p.value} color={p.color} size="sm" radius="xl" />
                    </Box>
                  ))}
                </Paper>
              </Grid.Col>
            </Grid>
          </Tabs.Panel>

          {/* ── Events ── */}
          <Tabs.Panel value="events" p="md">
            <Grid mb="md">
              <Grid.Col span={7}>
                <Paper withBorder p="md" radius="md">
                  <Text fw={600} size="sm" mb="sm">نشاط الحضور — 2024</Text>
                  <BarChart
                    h={140}
                    data={attendanceData}
                    dataKey="month"
                    series={[{ name: 'حضور', color: 'blue.6' }]}
                    tickLine="none"
                    gridAxis="none"
                    withLegend={false}
                    barProps={{ radius: [4, 4, 0, 0] }}
                  />
                </Paper>
              </Grid.Col>
              <Grid.Col span={5}>
                <Paper withBorder p="md" radius="md" h="100%">
                  <Text fw={600} size="sm" mb="md">توزيع الفعاليات</Text>
                  <Stack gap="sm">
                    {[
                      { label: 'اجتماعية', value: 42, count: 5, color: 'blue' },
                      { label: 'تعليمية', value: 33, count: 4, color: 'teal' },
                      { label: 'رياضية', value: 17, count: 2, color: 'orange' },
                      { label: 'ثقافية', value: 8, count: 1, color: 'violet' },
                    ].map(d => (
                      <Box key={d.label}>
                        <Group justify="space-between" mb={4}>
                          <Text size="xs">{d.label}</Text>
                          <Badge size="xs" variant="light" color={d.color}>{d.count}</Badge>
                        </Group>
                        <Progress value={d.value} color={d.color} size="sm" radius="xl" />
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </Grid.Col>
            </Grid>

            <Paper withBorder radius="md" style={{ overflow: 'hidden' }}>
              <ScrollArea>
                <Table highlightOnHover withColumnBorders={false} withRowBorders verticalSpacing="sm" horizontalSpacing="md">
                  <Table.Thead bg="gray.0">
                    <Table.Tr>
                      <Table.Th>الفعالية</Table.Th>
                      <Table.Th>النوع</Table.Th>
                      <Table.Th>التاريخ</Table.Th>
                      <Table.Th>الحالة</Table.Th>
                      <Table.Th>نقاط</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {[
                      { name: 'ملتقى الأسرة السنوي 2024', sub: 'الرياض — قاعة النخبة', type: 'اجتماعية', typeColor: 'blue', date: '2024/11/15', status: 'حضر', statusColor: 'teal', points: '+50' },
                      { name: 'ورشة التخطيط المالي', sub: 'أونلاين — Zoom', type: 'تعليمية', typeColor: 'teal', date: '2024/10/08', status: 'حضر', statusColor: 'teal', points: '+35' },
                      { name: 'بطولة الكرة العائلية', sub: 'الدمام — ملعب الأسرة', type: 'رياضية', typeColor: 'orange', date: '2024/09/20', status: 'تأخر', statusColor: 'yellow', points: '+20' },
                      { name: 'محاضرة التراث العائلي', sub: 'جدة — دار الثقافة', type: 'ثقافية', typeColor: 'violet', date: '2024/08/05', status: 'غائب', statusColor: 'red', points: '—' },
                    ].map((row) => (
                      <Table.Tr key={row.name}>
                        <Table.Td>
                          <Text size="sm" fw={600}>{row.name}</Text>
                          <Text size="xs" c="dimmed">{row.sub}</Text>
                        </Table.Td>
                        <Table.Td><Badge size="sm" variant="light" color={row.typeColor}>{row.type}</Badge></Table.Td>
                        <Table.Td><Text size="sm" c="dimmed">{row.date}</Text></Table.Td>
                        <Table.Td><Badge size="sm" variant="dot" color={row.statusColor}>{row.status}</Badge></Table.Td>
                        <Table.Td><Text size="sm" fw={700} c={row.points === '—' ? 'dimmed' : 'blue'}>{row.points}</Text></Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </ScrollArea>
            </Paper>
          </Tabs.Panel>

          {/* ── Consulting ── */}
          <Tabs.Panel value="consulting" p="md">
            <Timeline active={0} bulletSize={32} lineWidth={2}>
              {[
                { icon: <IconBriefcase size={14} />, title: 'استشارة تقنية — تطوير تطبيق الأسرة', desc: 'قدّم توصيات بشأن اختيار Stack التقني المناسب. اقترح React Native مع Django backend.', tags: [{ l: 'تقنية', c: 'blue' }, { l: 'مقبولة', c: 'teal' }], time: 'منذ 3 أيام', color: 'blue' },
                { icon: <IconBuildingBank size={14} />, title: 'استشارة قانونية — تسجيل الصندوق العائلي', desc: 'مراجعة الوثائق القانونية المتعلقة بتأسيس صندوق الأسرة وتقديم المشورة.', tags: [{ l: 'قانونية', c: 'teal' }, { l: 'قيد المراجعة', c: 'yellow' }], time: 'منذ أسبوعين', color: 'yellow' },
                { icon: <IconHome size={14} />, title: 'استشارة عقارية — مشروع السكن العائلي', desc: 'دراسة الجدوى الاقتصادية لمشروع توفير الوحدات السكنية للأعضاء بأسعار مدعومة.', tags: [{ l: 'عقارية', c: 'orange' }, { l: 'مكتملة', c: 'teal' }], time: 'منذ شهر', color: 'teal' },
                { icon: <IconSchool size={14} />, title: 'استشارة تعليمية — منح الدراسة للأبناء', desc: 'توجيه أبناء الأسرة نحو برامج المنح والابتعاث في الجامعات العالمية.', tags: [{ l: 'تعليمية', c: 'violet' }, { l: 'مكتملة', c: 'teal' }], time: 'منذ 3 أشهر', color: 'teal' },
              ].map((item, i) => (
                <Timeline.Item
                  key={i}
                  bullet={<ThemeIcon size={32} radius="xl" color={item.color} variant="light">{item.icon}</ThemeIcon>}
                  title={<Text fw={600} size="sm">{item.title}</Text>}
                >
                  <Text size="xs" c="dimmed" mt={4} mb={8}>{item.desc}</Text>
                  <Group gap="xs" mb={4}>
                    {item.tags.map(t => <Badge key={t.l} size="xs" variant="light" color={t.c}>{t.l}</Badge>)}
                  </Group>
                  <Text size="xs" c="dimmed">{item.time}</Text>
                </Timeline.Item>
              ))}
            </Timeline>
          </Tabs.Panel>

          {/* ── Finance ── */}
          <Tabs.Panel value="finance" p="md">
            <Grid mb="md">
              <Grid.Col span={5}>
                <Paper
                  p="xl"
                  radius="md"
                  h="100%"
                  style={{ background: 'linear-gradient(135deg, #1971c2, #228be6)', color: 'white' }}
                >
                  <Text size="xs" style={{ opacity: 0.7 }} mb="xs" tt="uppercase" fw={500}>إجمالي الرصيد</Text>
                  <Text fw={800} size="3rem" lh={1} mb={4} style={{ letterSpacing: '-0.05em' }}>4,200</Text>
                  <Text size="sm" style={{ opacity: 0.6 }}>ريال سعودي</Text>
                  <Text size="xs" mt="xl" style={{ opacity: 0.5 }}>آخر تحديث: 2024/11/20</Text>
                </Paper>
              </Grid.Col>
              <Grid.Col span={7}>
                <Paper withBorder p="md" radius="md" h="100%">
                  <Text fw={600} size="sm" mb="md">ملخص مالي</Text>
                  <SimpleGrid cols={2} spacing="sm">
                    {[
                      { k: 'إجمالي المدفوع', v: '8,400 ريال', c: 'teal' },
                      { k: 'اشتراك سنوي', v: '1,200 ريال', c: undefined },
                      { k: 'المكافآت المكتسبة', v: '350 ريال', c: 'violet' },
                      { k: 'الحالة', v: 'محدّث ✓', c: 'teal' },
                    ].map(item => (
                      <Box key={item.k}>
                        <Text size="xs" c="dimmed" mb={2}>{item.k}</Text>
                        <Text size="sm" fw={600} c={item.c}>{item.v}</Text>
                      </Box>
                    ))}
                  </SimpleGrid>
                </Paper>
              </Grid.Col>
            </Grid>

            <Paper withBorder radius="md" style={{ overflow: 'hidden' }}>
              <ScrollArea>
                <Table highlightOnHover withRowBorders verticalSpacing="sm" horizontalSpacing="md">
                  <Table.Thead bg="gray.0">
                    <Table.Tr>
                      <Table.Th>البيان</Table.Th>
                      <Table.Th>التاريخ</Table.Th>
                      <Table.Th>النوع</Table.Th>
                      <Table.Th>المبلغ</Table.Th>
                      <Table.Th>الرصيد</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {[
                      { desc: 'اشتراك شهر نوفمبر 2024', date: '2024/11/01', type: 'دفع', typeC: 'teal', amount: '+600', amountC: 'teal', balance: '4,200' },
                      { desc: 'رسوم فعالية الملتقى السنوي', date: '2024/11/10', type: 'خصم', typeC: 'red', amount: '-150', amountC: 'red', balance: '3,600' },
                      { desc: 'مكافأة تقديم استشارة', date: '2024/11/18', type: 'مكافأة', typeC: 'violet', amount: '+100', amountC: 'violet', balance: '3,700' },
                      { desc: 'اشتراك شهر أكتوبر 2024', date: '2024/10/01', type: 'دفع', typeC: 'teal', amount: '+600', amountC: 'teal', balance: '3,600' },
                    ].map(row => (
                      <Table.Tr key={row.desc}>
                        <Table.Td><Text size="sm" fw={500}>{row.desc}</Text></Table.Td>
                        <Table.Td><Text size="sm" c="dimmed">{row.date}</Text></Table.Td>
                        <Table.Td><Badge size="sm" variant="light" color={row.typeC}>{row.type}</Badge></Table.Td>
                        <Table.Td><Text size="sm" fw={700} c={row.amountC}>{row.amount}</Text></Table.Td>
                        <Table.Td><Text size="sm" fw={600}>{row.balance}</Text></Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </ScrollArea>
            </Paper>
          </Tabs.Panel>

          {/* ── Family ── */}
          <Tabs.Panel value="family" p="md">
            <Alert icon={<IconTree size={16} />} color="orange" variant="light" mb="md">
              <Text fw={600} size="sm">شجرة الأسرة التفاعلية</Text>
              <Text size="xs">ينتمي إلى الفرع الرئيسي — سويلم بن محمد. الجيل الثالث من 7 أجيال مسجلة.</Text>
            </Alert>

            <SimpleGrid cols={3} spacing="md" mb="md">
              {[
                { emoji: '👴', name: 'خالد السويلم', role: 'الأب — الجيل الثاني', badge: 'عضو فاعل', badgeC: 'teal', highlight: false },
                { emoji: '👤', name: 'عبدالرحمن خالد', role: 'العضو الحالي — الجيل الثالث', badge: 'أنت', badgeC: 'blue', highlight: true },
                { emoji: '👶', name: 'محمد عبدالرحمن', role: 'الابن — الجيل الرابع', badge: 'منتسب', badgeC: 'yellow', highlight: false },
              ].map(m => (
                <Paper
                  key={m.name}
                  withBorder
                  p="xl"
                  radius="md"
                  ta="center"
                  style={m.highlight ? { borderColor: 'var(--mantine-color-blue-4)', background: 'var(--mantine-color-blue-0)' } : {}}
                >
                  <Text size="3rem" mb="sm">{m.emoji}</Text>
                  <Text fw={700} size="sm" mb={4}>{m.name}</Text>
                  <Text size="xs" c="dimmed" mb="sm">{m.role}</Text>
                  <Badge variant="light" color={m.badgeC} size="sm">{m.badge}</Badge>
                </Paper>
              ))}
            </SimpleGrid>

            <Paper withBorder p="md" radius="md">
              <Text fw={600} size="sm" mb="md">إحصاء الفرع</Text>
              <SimpleGrid cols={4}>
                {[
                  { v: '7', l: 'أجيال', c: 'blue' },
                  { v: '142', l: 'عضو في الفرع', c: 'teal' },
                  { v: '38', l: 'من الجيل الثالث', c: 'orange' },
                  { v: '5', l: 'أبناء مباشرون', c: 'violet' },
                ].map(s => (
                  <Box key={s.l} ta="center" py="sm">
                    <Text fw={800} size="2rem" lh={1} c={s.c} mb={4}>{s.v}</Text>
                    <Text size="xs" c="dimmed">{s.l}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Paper>
          </Tabs.Panel>
        </Tabs>

        {/* Footer Actions */}
        <Box p="md" style={{ borderTop: '1px solid var(--mantine-color-gray-2)', background: 'var(--mantine-color-gray-0)' }}>
          <Group justify="space-between">
            <Group gap="xs">
              <Button size="sm" leftSection={<IconEdit size={14} />}>تعديل العضو</Button>
              <Button size="sm" variant="outline" leftSection={<IconMail size={14} />}>إرسال رسالة</Button>
              <Button size="sm" variant="subtle" leftSection={<IconFileExport size={14} />}>تصدير PDF</Button>
            </Group>
            <Group gap="xs">
              <Text size="xs" c="dimmed">آخر تعديل: 2024/11/20 — بواسطة المدير</Text>
              <Button size="sm" color="red" variant="light" leftSection={<IconArchive size={14} />}>أرشفة</Button>
            </Group>
          </Group>
        </Box>
      </Card>

      <Text ta="center" size="xs" c="dimmed" mt="md">
        مبني بـ <Text span fw={700} c="blue">Mantine UI v7</Text> · نظام كفاح لإدارة أسرة سويلم
      </Text>
    </Box>
  )
}
